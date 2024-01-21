const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const teacherSchema = new Schema({
   name:{
   	type: String,
   	required: true,
   },
   subject:{
   	type: String,
   	required: true
   },
   subjectcode:{
      type: String,
      required: true
   },   
   email:{
      type: String,
      required: true
   },
   phone: {
      type:Number,
      required: true
   },
   password:{
   	type: String,
   	required: true
   },
   category:{
      type: String,
       default: "teacher"
   },
   adminemail:{
      type: String,
      required: true
   }

});

teacherSchema.pre("save",async function (next){
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

teacherSchema.methods.generateToken = async function() {
   try{
      return jwt.sign(
      {
         userId: this._id.toString(),
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


const teacherRegistration = new model("teacherRegistration",teacherSchema);
module.exports = teacherRegistration;