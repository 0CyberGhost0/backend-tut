import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";
const app=express();

const connectDB = async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB CONNECTED ${connectionInstance.connection.host}`);

        // app.on("error",()=>{
        //     console.log("MONGODB CONNECTEDDD");

        // })
    } catch (error) {
        console.log("DATABASE CONNECTION FAILED: ",error);
        process.exit(1);
    }
}
export default connectDB 