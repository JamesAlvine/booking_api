import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hostelsRoute from "./routes/hostels.js"
import roomsRoute from "./routes/rooms.js"

const app =express()
dotenv.config()

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("connected to mongoDB");
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");

})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");

})

// middlewares
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/users",usersRoute);
app.use("/api/v1/hostels",hostelsRoute);
app.use("/api/v1/rooms",roomsRoute);


app.listen(8800,()=>{
    connect()
    console.log("connected to backend");
})