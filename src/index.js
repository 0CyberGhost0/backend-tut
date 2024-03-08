// import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
const app=express();
// import { DB_NAME } from "./constant s";
dotenv.config({
    'path':"./env"
})
connectDB();
// (aync()=> {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)={
//             console.log("Errorrr:",error);
//         });
//         app.listen(process.env.PORT,()=>{
//             console.log(`Listening on PORT ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.error("Error ", error);
//         throw error;
//     }
// }) ()