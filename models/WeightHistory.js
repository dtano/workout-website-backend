module.exports = (sequelize, Sequelize) => {
    const WeightHistory = sequelize.define("weight_history", {
        weight: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        date_added: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {timestamps: false});

    return WeightHistory;
}