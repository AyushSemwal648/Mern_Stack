import express from "express";
import { WorkoutModel } from "../Models/workoutModel";

const router = express.Router()

//Get all workout
router.get("/", (req, res) => {
res.json({mssg: "Get all Workouts"})
})

//get a single workout
router.get("/:id", ( req, res) => {
    res.json({mssg: "get a single workout"})
})

//Post a new workout
router.post("/", async (req, res) => {
    const {title, reps, load} = req.body

    try{
        const workout = await WorkoutModel.create({title, reps, load})
        res.status(200).json({workout, status: "ok"})

    }
    catch (error: any){
        res.status(400).json({error: error.message})
    }

})

//Delete a workout
router.delete("/:id", (req, res) => {
    res.json({mssg: "Delete a workout"})
})

//Update a workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "Update  a workout"})
})

export default router;