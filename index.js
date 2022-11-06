// import express
import express from "express";
// import cors
import cors from "cors";
  
// import routes
import Router from "./routes/routes.js";
  
// init express
const app = express();
  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
   
// use router
app.use(Router);

let port = process.env.PORT || 5000;

//start app  
app.listen(port, () => console.log('Server is up and running on port: ' + port));
