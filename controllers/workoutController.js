const db = require("../models");

const Workout = db.workouts;
const Exercise = db.exercises;
const WorkoutExercise = db.workoutExercises;

const commonWorkoutRoutine = [
    {
        name: "Jumping Lunge",
        image_name: "JumpingLunge",
        duration: 10
    },
    {
        name: "High Knees",
        image_name: "HighKnees",
        duration: 20
    },
    {
        name: "Jumping Lunge",
        image_name: "JumpingLunge",
        duration: 10
    },
    {
        name: "Punches",
        image_name: "Punches",
        duration: 20
    },
    {
        name: "Push-ups",
        image_name: "HighKnees",
        duration: 10
    },
    {
        name: "Punches",
        image_name: "Punches",
        duration: 20
    },
    {
        name: "Side Plank (Left)",
        image_name: "SidePlank",
        duration: 20
    },
    {
        name: "Plank",
        image_name: "Plank",
        duration: 20
    },
    {
        name: "Side Plank (Right)",
        image_name: "SidePlank",
        duration: 20
    }
]

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

        console.log(exerciseMap);
        

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