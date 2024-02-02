require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./utils/db");
const router = require("./router/auth-router");
const cors = require("cors");

const corsOptions = {
	origin: (origin,callback) => {
      const allowedOrigin = [
         "http://localhost:3000",
         "https://vickyschoolmanagement.netlify.app"

      	];

      const isAllowed = allowedOrigin.includes(origin);
      callback(null,isAllowed ? origin : false);

	}, 
	methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
	credentials: true,
	
}


app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth",router);

const port = process.env.PORT || 5000;


connectDb().then(()=>{
app.listen(port,() => {
	console.log(`server is running on port : ${port}`);
});
});