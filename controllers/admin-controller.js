const adminregistration = require("../models/register-model");

const admin = async(req,res) => {
	try{

	const {name,phone,email,school,password} = req.body;
	
	const userExist = await adminregistration.findOne({ email });	

	if(userExist){
		return res.status(400).json({message: "email already exists"});
	}

	const userCreated = await adminregistration.create({name,phone,email,school,password});

	res.status(200).json({
        message: "Registered successfully",
        token: await userCreated.generateToken(),
	   userId: userCreated._id.toString()

	});
    }catch(error){
		res.status(500).json(error);
	}
 }


  module.exports = admin;