const db = require("../models");

const User = db.users;
const Workout = db.workouts;
const UserWorkout = db.userWorkouts;

const getAllUserWorkouts = async (req, res) => {
    try {
        const userWorkoutHistory = await UserWorkout.findAll({
            where: {
                user_id: req.params.userId
            }
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

const getWorkoutHistoryReport = async (req, res) => {
    try{
        const workoutMap = {};

        const userWorkoutHistory = await UserWorkout.findAll({
            where: {
                user_id: req.params.userId
            }
        });

        const workoutReport = {
            totalWorkouts: userWorkoutHistory.length,
            totalMinutes: 0,
            totalCaloriesBurnt: 0
        }

        for(let i = 0; i < userWorkoutHistory.length; i++){
            const workoutId = userWorkoutHistory[i].workout_id;
            if(!workoutMap.hasOwnProperty(workoutId)){
                const workout = await Workout.findOne({where: {id: workoutId}});
                workoutMap[workout.id] = workout;
            }

            workoutReport.totalMinutes += workoutMap[workoutId].duration;
            workoutReport.totalCaloriesBurnt += workoutMap[workoutId].calories_burnt;
        }

        return res.status(200).json(workoutReport);
    }catch(err){
        return res.status(500).json(err.message);
    }
}

module.exports = {
    getAllUserWorkouts,
    createWorkoutEvent,
    getWorkoutHistoryReport
}