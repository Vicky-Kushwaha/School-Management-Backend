const { z } = require("zod");

const signupSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be of 3 charecters" })
    .max(255, { message: "Name must not be more than 255 charecters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be of 10 charecters" })
    .max(20, { message: "Phone must not be more than 20 charecters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be of 3 charecters" })
    .max(255, { message: "Email must not be more than 255 charecters" }),
  school: z
    .string({ required_error: "School is required" })
    .trim()
    .min(3, { message: "School must be of 3 charecters" })
    .max(255, { message: "School must not be more than 255 charecters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password must be of 3 charecters" })
    .max(255, { message: "Password must not be more than 255 charecters" }),
});

const teacherValidateSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be of 3 charecters" })
    .max(255, { message: "Name must not be more than 255 charecters" }),
  subject: z
    .string({ required_error: "Subject is required" })
    .trim()
    .min(2, { message: "Subject must be of 3 charecters" })
    .max(255, { message: "Subject must not be more than 255 charecters" }),
  subjectcode: z
    .string({ required_error: "Subjectcode is required" })
    .trim()
    .min(3, { message: "Subjectcode must be of 3 charecters" })
    .max(255, { message: "Subjectcode must not be more than 255 charecters" }),        
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be of 10 charecters" })
    .max(20, { message: "Phone must not be more than 20 charecters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be of 3 charecters" })
    .max(255, { message: "Email must not be more than 255 charecters" }),
  adminemail: z
    .string({ required_error: "Adminemail is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be of 3 charecters" })
    .max(255, { message: "Email must not be more than 255 charecters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password must be of 3 charecters" })
    .max(255, { message: "Password must not be more than 255 charecters" }),
});

const studentValidateSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be of 3 charecters" })
    .max(255, { message: "Name must not be more than 255 charecters" }),
  classname: z
    .string({ required_error: "Class is required" })
    .min(1, { message: "Roll not be less than one" }),
  roll: z
    .string({ required_error: "Roll is required" })
    .min(1, { message: "Roll not be less than one" })
    .max(255, { message: "Roll must not be more than 255 charecters" }),
  father: z
    .string({ required_error: "Father name is required" })
    .trim()
    .min(3, { message: "Father name must be of 3 charecters" })
    .max(255, { message: "Father name must not be more than 255 charecters" }),
  mother: z
    .string({ required_error: "Mother name is required" })
    .trim()
    .min(3, { message: "Mother name must be of 3 charecters" })
    .max(255, { message: "Mother name must not be more than 255 charecters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be of 10 charecters" })
    .max(20, { message: "Phone must not be more than 20 charecters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be of 3 charecters" })
    .max(255, { message: "Email must not be more than 255 charecters" }),
  adminemail: z
    .string({ required_error: "Adminemail is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be of 3 charecters" })
    .max(255, { message: "Email must not be more than 255 charecters" }),    
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password must be of 3 charecters" })
    .max(255, { message: "Password must not be more than 255 charecters" }),
});


module.exports = { signupSchema,teacherValidateSchema,studentValidateSchema };
