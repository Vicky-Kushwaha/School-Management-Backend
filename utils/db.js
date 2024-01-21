
const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL


const connnectDb = async() => {
	try{

	await mongoose.connect(URL);
	console.log("connection is successful to Db");	

	}catch(error){
		console.error("database connection failed");
        process.exit(0);
	}
}

module.exports = connnectDb;