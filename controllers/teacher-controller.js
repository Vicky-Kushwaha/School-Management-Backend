const teacherRegistration = require("../models/teacher-model");

const teacher = async(req,res) => {
	try{

	const {name,subject,subjectcode,email,phone,password,adminemail} = req.body;	

	const teacherExist = await teacherRegistration.findOne({email});

	if(teacherExist){
		res.status(400).json({message: "Teacher with this email already exist"})
	}else{	

	const teacherCreated = await teacherRegistration.create({name,subject,subjectcode,email,phone,password,adminemail});

	res.status(200).json({message: "Teacher added successfully" });
          }

	}catch(error){
		res.status(500).json(error);
	}
}


const teacherEdit = async(req,res) => {
    try{

     const teacherId = req.params.id;    

    const {name,subject,subjectcode,email,phone} = req.body;   

    const studentUpdated = await teacherRegistration.updateOne({_id : teacherId},{$set: {name,subject,subjectcode,email,phone}});  

        res.status(200).json({message: "Teacher updated successfully"});


    }catch(error){
        res.status(500).json(error);
    }
} 


const deleteTeacher = async(req,res) => {
    try{

    const teacherId = req.params.id;        

    const teacherDeleted = await teacherRegistration.deleteOne({ _id : teacherId });  

        res.status(200).json({message: "Teacher deleted successfully"});


    }catch(error){
        res.status(500).json(error);
    }
}

module.exports = {teacher,teacherEdit,deleteTeacher};