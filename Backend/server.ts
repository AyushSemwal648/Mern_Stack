import express from "express"; 
require('dotenv').config()
import WorkoutRoutes from "./Routes/workout"
import mongoose from "mongoose";


// Express App
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use("/api/workouts",WorkoutRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI as string)
.then( () => {
    // listen for request 
app.listen(process.env.PORT, () => {
    console.log("Connected to Db and Listening To port 4000 !!!")
})
})
.catch((error) => {
    console.log(error)
})



