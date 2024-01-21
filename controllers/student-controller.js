const studentRegistration = require("../models/student-model");

const student = async(req,res) => {
	try{

	const {name,classname,roll,father,mother,phone,email,password,adminemail,fee} = req.body;	

	const studentExist = await studentRegistration.findOne({email});
	if(studentExist){
		res.status(400).json({message: "Student with this email already exist"})
	}else{	

	const studentCreated = await studentRegistration.create([{name,classname,roll,father,mother,phone,email,password,adminemail,fee}]);

	res.status(200).json({message: "Student added successfully" });  
        }

	}catch(error){
		res.status(500).json(error);
	}
}


const studentEdit = async(req,res) => {
    try{

    const studentId = req.params.id;     

    const {_id,name,classname,roll,father,mother,phone,email,fee,absent,present} = req.body;   

    const studentUpdated = await studentRegistration.updateOne({_id:studentId},{$set: {name,classname,roll,father,mother,phone,email,fee},absent,present});  

        res.status(200).json({message: "Student updated successfully"});


    }catch(error){
        res.status(500).json(error);
    }
} 

const deleteStudent = async(req,res) => {
    try{
     const studentId = req.params.id;  

    const studentDeleted = await studentRegistration.deleteOne({ _id : studentId });  

        res.status(200).json({message: "Student deleted successfully"});


    }catch(error){
        res.status(500).json(error);
    }
} 


module.exports = {student,studentEdit,deleteStudent};