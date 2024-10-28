import express from "express";
import { WorkoutModel } from "../Models/workoutModel";
import { createWorkout, getWorkout, getWorkouts } from "../Controllers/workoutController";

const router = express.Router()

//Get all workout
router.get("/", getWorkouts)

//get a single workout
router.get("/:id", getWorkout)

//Post a new workout
router.post("/", createWorkout)

//Delete a workout
router.delete("/:id", (req, res) => {
    res.json({mssg: "Delete a workout"})
})

//Update a workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "Update  a workout"})
})

export default router;