const notice = require("../models/notice-model");

const addNotice = async(req,res) => {
    try{

    const {noticedata,adminemail} = req.body;
    const noticeAdded = await notice.create({noticedata,adminemail});
      
     res.status(200).json({msg:"Notice added successfully"}) 

    }catch(error){
        res.status(500).json(error)
    }
}

const noticeDelete = async(req,res) => {
    try{

     const noticeId = req.params.id;
     
     const deletedNotice = await notice.deleteOne({_id : noticeId});

      res.status(200).json({msg: "Notice deleted successfully"})  

    }catch(error){
        res.status(500).json(error);
    }
}

module.exports = {addNotice,noticeDelete};