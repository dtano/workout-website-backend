module.exports =  (sequelize, Sequelize) => {
    const UserWorkout = sequelize.define("user_workout", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        date_completed: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {timestamps: false});

    return UserWorkout;
}