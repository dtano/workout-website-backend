const dbConfig = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "password",
    DB: "workout_web_db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = dbConfig;