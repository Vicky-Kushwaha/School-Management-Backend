const jwt = require("jsonwebtoken");
const adminregistration = require("../models/register-model");
const teacherRegistration = require("../models/teacher-model");
const studentRegistration = require("../models/student-model");
const notice = require("../models/notice-model");

const authMiddleware = async(req,res,next) => {
  
// getting token from forntend header  
  const token = req.header("Authorization");

  if(!token){
  	return res.status(401).json({message: "Unauthorized HTTP, Token not provided"});
  }

 const jwtToken = token.replace("Bearer", "").trim();

 try{
 
 const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);

 if(isVerified.category === "admin"){
  
 const admin = await adminregistration.findOne({email: isVerified.email}).
    select({
    	password: 0,
    });

  const student = await studentRegistration.find({adminemail: isVerified.email}).
    select({
      password: 0,
    });
    
   const teacher = await teacherRegistration.find({adminemail: isVerified.email}).
    select({
      password: 0,
    });  
    
   const noticeData = await notice.find({adminemail: isVerified.email});        

 req.user = admin;  // this data is sent to user in auth-controller
 req.student = student;
 req.teacher = teacher;
 req.noticed = noticeData;

   }else if(isVerified.category === "student"){

 const student = await studentRegistration.findOne({email: isVerified.email}).
    select({
    	password: 0,
    });
 const noticeData = await notice.find({adminemail: isVerified.adminemail});

 req.user = student;  // this data is sent to user in auth-controller
 req.noticed = noticeData;

   }else if(isVerified.category === "teacher"){

 const teacher = await teacherRegistration.findOne({email: isVerified.email}).
    select({
    	password: 0,
    });

  
  const student = await studentRegistration.find({adminemail: isVerified.adminemail}).
    select({
      password: 0,
    }); 

  const noticeData = await notice.find({adminemail: isVerified.adminemail});     

 req.user = teacher;  // this data is sent to user in auth-controller
 req.noticed = noticeData;
 req.student = student;

 
   }else{
   	  res.status(400).json({msg: "category not matched"})
   }     
   
   next();

 }catch(error){
 	return res.status(401).json(error);
 }

};

module.exports = authMiddleware;