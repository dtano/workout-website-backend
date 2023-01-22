const db = require("../models");

// const WorkoutExercise = db.workoutExercises;
const Workout = db.workouts;
const Exercise = db.exercises;

const getWorkout = (req, res) => {
    try{
        const workoutId = req.params.id;

        const workout = Workout.findOne({
            where: {
                id: workoutId
            },
            include: [
                {
                    model: Exercise,
                    through: { attributes: [] }
                }
            ]
        });

        res.status(200).json(workout);
    }catch(err){
        console.log(err);
        return res.status(500).json(err.message);
    }
}

const getAllWorkouts = (req, res) => {
    try{
        const allWorkouts = Workout.findAll({
            include: [
                {
                    model: Exercise,
                    through: { attributes: [] }
                }
            ]
        });
        res.status(200).json(allWorkouts);
    }catch(err){
        console.log(err);
        return res.status(500).json(err.message);
    }
}

module.exports = {
    getWorkout,
    getAllWorkouts
}