'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('exercises', [
      {
        name: "Punches",
        image_name: "Punches",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "High Knees",
        image_name: "HighKnees",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jumping Lunge",
        image_name: "JumpingLunge",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Plank",
        image_name: "Plank",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Side Plank (Left)",
        image_name: "SidePlank",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Side Plank (Right)",
        image_name: "Plank",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Push-ups",
        image_name: "PushUp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rest",
        image_name: "WaterBottle",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('exercises', null, {truncate: true, restartIdentity: true});
  }
};
