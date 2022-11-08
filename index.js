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

const PORT = process.env.PORT || 3030;

//start app  
app.listen(PORT, () => console.log('Server is up and running on port: ' + PORT));
