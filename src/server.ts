import * as dotenv from 'dotenv'; 
const result = dotenv.config();

if(result.error){
    console.log('Error loading envirment variables')
    process.exit(1)
}


import * as express from "express";
import { logger } from './logger';
import {root} from "./routes/root";

const PORT = process.env.PORT ? Number(process.env.PORT) : 9000

//create an express application
const app = express();

//Will setup here all the express routes and midleware
function setupExpress(){

    app.route("/").get(root);

}

function startServer(){
app.listen(PORT, ()=>{
  
    logger.info(`V3 Server is running on ${PORT}`)
})
}

setupExpress();
startServer();