const {Schema,model} = require("mongoose");

const noticeSchema = new Schema({
	noticedata:{
		type: String,
		required:true
	},
	adminemail: {
		type:String,
		required: true
	}
});

const notice = new model("notice",noticeSchema);

module.exports = notice;