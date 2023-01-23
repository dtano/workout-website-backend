const Sequelize = require("sequelize");
const dbConfig = require("../config/dbConfig");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User")(sequelize, Sequelize);
db.exercises = require("./Exercise")(sequelize, Sequelize);
db.workouts = require("./Workout")(sequelize, Sequelize);
db.workoutExercises = require("./WorkoutExercise")(sequelize, Sequelize);
db.userWorkouts = require("./UserWorkout")(sequelize, Sequelize);
db.weightHistory = require("./WeightHistory")(sequelize, Sequelize);

// Exercise-Workout many to many relationship
db.exercises.belongsToMany(db.workouts, {
    through: {
        model: db.workoutExercises,
        unique: false
    },
    foreignKey: "exercise_id"
});

db.workouts.belongsToMany(db.exercises, {
    through: {
        model: db.workoutExercises,
        unique: false
    },
    foreignKey: "workout_id"
});

// User-Workout many to many relationship
db.users.belongsToMany(db.workouts, {
    through: {
        model: db.userWorkouts,
        unique: false
    },
    foreignKey: "user_id"
});

db.workouts.belongsToMany(db.users, {
    through: {
        model: db.userWorkouts,
        unique: false
    },
    foreignKey: "workout_id"
});

// User one to many weight history
db.users.hasMany(db.weightHistory, { as: "weightChanges"});
db.weightHistory.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user",
});

module.exports = db;