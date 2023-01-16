module.exports = (sequelize, Sequelize) => {
    const Workout = sequelize.define("workout", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
        },
        calories_burnt: {
            type: Sequelize.INTEGER
        },
        duration: {
            type: Sequelize.INTEGER
        }
    });

    return Workout;
}