import { WorkoutModel } from "../Models/workoutModel";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

//get all workouts
export  const getWorkouts = async (req:Request, res: Response) => {
    const workouts = await WorkoutModel.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}


//get a single workout
export const getWorkout = async (req: Request, res: Response) => {
    const  {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({error: "no such workout"})
            return
        }
        
        const workout = await WorkoutModel.findById(id)
        res.status(200).json(workout)
    
    } catch (error) {
        res.status(404).json({error: "no such workout"})

    }
}


//create a new workout
export const createWorkout = async (req: Request, res: Response) => {
    const {title, reps, load} = req.body

    //add doc to db
    try{
        const workout = await WorkoutModel.create({title, reps, load})
        res.status(200).json({workout, status: "ok"})

    }
    catch (error: any){
        res.status(400).json({error: error.message})
    }
}



//delete a workout



//update a workout



