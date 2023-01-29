const db = require("../models");

const Workout = db.workouts;
const Exercise = db.exercises;
const WorkoutExercise = db.workoutExercises;

const getWorkout = async (req, res) => {
    try{
        const workoutId = req.params.id;

        const workout = await Workout.findOne({
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

        // Got through workout exercises and place them in a dictionary
        const exerciseMap = {};
        workout.exercises.forEach((exercise) => {
            if(!exerciseMap.hasOwnProperty(exercise.id)){
                exerciseMap[exercise.id] = exercise.dataValues
            }
        });
        
        const workoutExercises = await WorkoutExercise.findAll({
            order: [
                ["priority", "ASC"]
            ],
            where: {
                workout_id: workoutId
            },
        });

        const associatedWorkoutExercises = [];
        workoutExercises.forEach(workoutExercise => {
            const exerciseInfo = exerciseMap[workoutExercise.exercise_id];

            associatedWorkoutExercises.push({
                ...workoutExercise.dataValues,
                exercise: exerciseInfo
            });
        })
        workout.exerciseInfo = associatedWorkoutExercises;

        res.status(200).json({
            workout: workout,
            exercises: associatedWorkoutExercises
        });
    }catch(err){
        console.log(err);
        return res.status(500).json(err.message);
    }
}

const getAllWorkouts = async (req, res) => {
    try{
        const allWorkouts = await Workout.findAll({
            order: [
                ["difficulty_level", "ASC"]
            ],
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