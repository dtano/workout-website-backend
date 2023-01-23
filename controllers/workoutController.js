const db = require("../models");

const Workout = db.workouts;
const Exercise = db.exercises;

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

        res.status(200).json(workout);
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
            include: [
                {
                    model: Exercise,
                    through: { attributes: [] },
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