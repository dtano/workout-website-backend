module.exports = (sequelize, Sequelize) => {
    const Exercise = sequelize.define("exercise", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        image_name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    return Exercise;
}