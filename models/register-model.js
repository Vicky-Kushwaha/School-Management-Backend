const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerSchema = new Schema({
   name:{
   	type: String,
   	required: true,
   },
   phone:{
   	type: String,
   	required: true
   },
   email:{
   	type: String,
   	required: true
   },
   school:{
   	type: String,
   	required: true
   },
   password:{
   	type: String,
   	required: true
   },
   category:{
      type: String,
       default: "admin"
   }

});


registerSchema.pre("save",async function (next){
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

registerSchema.methods.generateToken = async function() {
   try{
      return jwt.sign(
      {
         userId: this._id.toString(),
         email: this.email,
         category: this.category
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

const adminregistration = new model("adminregistration",registerSchema);
module.exports = adminregistration;