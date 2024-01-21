
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {Schema,model} = require("mongoose");

const studentSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	classname:{
		type: Number,
		required: true
	},
	roll:{
		type: String,
		required: true
	},
	father:{
		type: String,
		required: true
	},
	mother:{
		type: String,
		required: true
	},
	phone:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	present:{
		type: Number,
	   default: 0
	},
	absent:{
		type: Number,
	   default: 0
	},
	category:{
		type: String,
	    default: "student"
	},
	adminemail:{
		type: String,
		required: true
	}
	,
	fee:{
		type: String,
	   default:"0"
	}
});

studentSchema.pre("save",async function (next){
   const user = this;

   if(!user.isModified("password")){
      next();
   }

  try{
   const saltRound = await bcrypt.genSalt(10);
   const hash_password = await bcrypt.hash(user.password, saltRound);
   user.password = hash_password;
  }catch(error){
   next(error);
  }

});

studentSchema.methods.generateToken = async function() {
   try{
      return jwt.sign(
      {
         userId: this._id.toString(), //this data is get after jwt.verify
         email: this.email,
         category: this.category,
         adminemail: this.adminemail
      },
      process.env.SECRET_KEY,
      {
         expiresIn: "30d"
      }
      );

   }catch(error){
      console.log(error);
   }
}

const studentRegistration = new model("StudentRegistration",studentSchema);

module.exports = studentRegistration;