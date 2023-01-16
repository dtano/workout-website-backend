module.exports = (sequelize, Sequelize) => {
    const WorkoutExercise = sequelize.define("workout_exercise", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },   
        duration: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priority: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {timestamps: false});

    return WorkoutExercise;
}