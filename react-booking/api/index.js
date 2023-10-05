import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routers/auth.js"
import usersRoute from "./routers/users.js"
import hotelsRoute from "./routers/hotels.js"
import roomsRoute from "./routers/rooms.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    } catch (error) {
        throw error
    }

}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconected!")
})

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Algo deu errado"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.listen(8800, () => {
    connectDB()
    console.log("Coneccted to backend")
})