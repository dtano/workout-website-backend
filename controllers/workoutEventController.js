const db = require("../models");

const User = db.users;
const Workout = db.workouts;
const UserWorkout = db.userWorkouts;

const getAllUserWorkouts = (req, res) => {
    try {
        const userWorkoutHistory = UserWorkout.findAll({
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

const createWorkoutEvent = (req, res) => {
    try{
        // Check if given workoutId exists
        const workout = Workout.findOne({
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

        const userWorkoutEvent = UserWorkout.create(creationData);
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