const db = require("../models");

const User = db.users;
const Workout = db.workouts;
const UserWorkout = db.userWorkouts;

const getAllUserWorkouts = async (req, res) => {
    try {
        const userWorkoutHistory = await UserWorkout.findAll({
            where: {
                user_id: req.params.userId
            },
        });

        return res.status(200).json(userWorkoutHistory);
    }catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

const createWorkoutEvent = async (req, res) => {
    try{
        // Check if given workoutId exists
        const workout = await Workout.findOne({
            where: {
                id: req.body.workoutId
            }
        });
        if(!workout) return res.status(409).json(`Workout with id ${req.body.workoutId} does not exist`);

        const creationData = {
            workout_id: req.body.workoutId,
            user_id: req.params.userId,
            date_completed: new Date()
        }

        const userWorkoutEvent = await UserWorkout.create(creationData);
        return res.status(200).json(userWorkoutEvent);
    }catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

module.exports = {
    getAllUserWorkouts,
    createWorkoutEvent
}