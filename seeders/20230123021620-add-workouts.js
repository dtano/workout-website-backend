'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('workouts', [
    {
      name: "Beginner",
      description: "Start your fitness journey with this full-body 20 minute workout perfect for beginners. A mat and a water bottle are all you need!",
      calories_burnt: 240,
      duration: 720,
      difficulty_level: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Intermediate",
      description: "For those who seek a bigger challenge. Get your sweat on with this 30 minute full-body workout! Suitable to be done at home.",
      calories_burnt: 340,
      duration: 1200,
      difficulty_level: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Advanced",
      description: "A 30 minute workout that will surely test your fitness! Take this challenge on, and see if you have what it takes.",
      calories_burnt: 450,
      duration: 1800,
      difficulty_level: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('workouts', null, {truncate: true, restartIdentity: true});
  }
};
