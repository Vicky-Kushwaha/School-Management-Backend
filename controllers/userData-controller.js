

const user = async(req,res) => {
	try{
        
       const userData = req.user; // req.user is coming from auth-middleware
       const studData = req.student;
       const teacData = req.teacher;
       const noticeData = req.noticed;  
       return res.status(200).json({userData,studData,teacData,noticeData});

	}catch(error){
		console.log(`error from the user route ${error}`);
	}
} 

module.exports = user;