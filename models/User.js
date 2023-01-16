module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        birth_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(64),
            allowNull: false
        }
    });

    return User;
}