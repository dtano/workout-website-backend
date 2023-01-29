'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("workout_exercises", [
      /* Beginner */
      {
        exercise_id: 3,
        workout_id: 1,
        duration: 10,
        priority: 1
      },
      {
        exercise_id: 2,
        workout_id: 1,
        duration: 20,
        priority: 2
      },
      {
        exercise_id: 3,
        workout_id: 1,
        duration: 10,
        priority: 3
      },
      {
        exercise_id: 1,
        workout_id: 1,
        duration: 20,
        priority: 4
      },
      {
        exercise_id: 7,
        workout_id: 1,
        duration: 10,
        priority: 5
      },
      {
        exercise_id: 1,
        workout_id: 1,
        duration: 20,
        priority: 6
      },
      {
        exercise_id: 5,
        workout_id: 1,
        duration: 20,
        priority: 7
      },
      {
        exercise_id: 4,
        workout_id: 1,
        duration: 20,
        priority: 8
      },
      {
        exercise_id: 6,
        workout_id: 1,
        duration: 20,
        priority: 9
      },
      {
        exercise_id: 8,
        workout_id: 1,
        duration: 120,
        priority: 10
      },
      {
        exercise_id: 3,
        workout_id: 1,
        duration: 10,
        priority: 11
      },
      {
        exercise_id: 2,
        workout_id: 1,
        duration: 20,
        priority: 12
      },
      {
        exercise_id: 3,
        workout_id: 1,
        duration: 10,
        priority: 13
      },
      {
        exercise_id: 1,
        workout_id: 1,
        duration: 20,
        priority: 14
      },
      {
        exercise_id: 7,
        workout_id: 1,
        duration: 10,
        priority: 15
      },
      {
        exercise_id: 1,
        workout_id: 1,
        duration: 20,
        priority: 16
      },
      {
        exercise_id: 5,
        workout_id: 1,
        duration: 20,
        priority: 17
      },
      {
        exercise_id: 4,
        workout_id: 1,
        duration: 20,
        priority: 18
      },
      {
        exercise_id: 6,
        workout_id: 1,
        duration: 20,
        priority: 19
      },
      {
        exercise_id: 8,
        workout_id: 1,
        duration: 120,
        priority: 20
      },
      {
        exercise_id: 3,
        workout_id: 1,
        duration: 10,
        priority: 21
      },
      {
        exercise_id: 2,
        workout_id: 1,
        duration: 20,
        priority: 22
      },
      {
        exercise_id: 3,
        workout_id: 1,
        duration: 10,
        priority: 23
      },
      {
        exercise_id: 1,
        workout_id: 1,
        duration: 20,
        priority: 24
      },
      {
        exercise_id: 7,
        workout_id: 1,
        duration: 10,
        priority: 25
      },
      {
        exercise_id: 1,
        workout_id: 1,
        duration: 20,
        priority: 26
      },
      {
        exercise_id: 5,
        workout_id: 1,
        duration: 20,
        priority: 27
      },
      {
        exercise_id: 4,
        workout_id: 1,
        duration: 20,
        priority: 28
      },
      {
        exercise_id: 6,
        workout_id: 1,
        duration: 20,
        priority: 29
      },
      /* Intermediate */
      {
        exercise_id: 3,
        workout_id: 2,
        duration: 10,
        priority: 1
      },
      {
        exercise_id: 2,
        workout_id: 2,
        duration: 20,
        priority: 2
      },
      {
        exercise_id: 3,
        workout_id: 2,
        duration: 10,
        priority: 3
      },
      {
        exercise_id: 1,
        workout_id: 2,
        duration: 20,
        priority: 4
      },
      {
        exercise_id: 7,
        workout_id: 2,
        duration: 10,
        priority: 5
      },
      {
        exercise_id: 1,
        workout_id: 2,
        duration: 20,
        priority: 6
      },
      {
        exercise_id: 5,
        workout_id: 2,
        duration: 20,
        priority: 7
      },
      {
        exercise_id: 4,
        workout_id: 2,
        duration: 20,
        priority: 8
      },
      {
        exercise_id: 6,
        workout_id: 2,
        duration: 20,
        priority: 9
      },
      {
        exercise_id: 8,
        workout_id: 2,
        duration: 120,
        priority: 10
      },
      {
        exercise_id: 3,
        workout_id: 2,
        duration: 10,
        priority: 11
      },
      {
        exercise_id: 2,
        workout_id: 2,
        duration: 20,
        priority: 12
      },
      {
        exercise_id: 3,
        workout_id: 2,
        duration: 10,
        priority: 13
      },
      {
        exercise_id: 1,
        workout_id: 2,
        duration: 20,
        priority: 14
      },
      {
        exercise_id: 7,
        workout_id: 2,
        duration: 10,
        priority: 15
      },
      {
        exercise_id: 1,
        workout_id: 2,
        duration: 20,
        priority: 16
      },
      {
        exercise_id: 5,
        workout_id: 2,
        duration: 20,
        priority: 17
      },
      {
        exercise_id: 4,
        workout_id: 2,
        duration: 20,
        priority: 18
      },
      {
        exercise_id: 6,
        workout_id: 2,
        duration: 20,
        priority: 19
      },
      {
        exercise_id: 8,
        workout_id: 2,
        duration: 120,
        priority: 20
      },
      {
        exercise_id: 3,
        workout_id: 2,
        duration: 10,
        priority: 21
      },
      {
        exercise_id: 2,
        workout_id: 2,
        duration: 20,
        priority: 22
      },
      {
        exercise_id: 3,
        workout_id: 2,
        duration: 10,
        priority: 23
      },
      {
        exercise_id: 1,
        workout_id: 2,
        duration: 20,
        priority: 24
      },
      {
        exercise_id: 7,
        workout_id: 2,
        duration: 10,
        priority: 25
      },
      {
        exercise_id: 1,
        workout_id: 2,
        duration: 20,
        priority: 26
      },
      {
        exercise_id: 5,
        workout_id: 2,
        duration: 20,
        priority: 27
      },
      {
        exercise_id: 4,
        workout_id: 2,
        duration: 20,
        priority: 28
      },
      {
        exercise_id: 6,
        workout_id: 2,
        duration: 20,
        priority: 29
      },
      {
        exercise_id: 8,
        workout_id: 2,
        duration: 120,
        priority: 30
      },
      {
        exercise_id: 3,
        workout_id: 2,
        duration: 10,
        priority: 31
      },
      {
        exercise_id: 2,
        workout_id: 2,
        duration: 20,
        priority: 32
      },
      {
        exercise_id: 3,
        workout_id: 2,
        duration: 10,
        priority: 33
      },
      {
        exercise_id: 1,
        workout_id: 2,
        duration: 20,
        priority: 34
      },
      {
        exercise_id: 7,
        workout_id: 2,
        duration: 10,
        priority: 35
      },
      {
        exercise_id: 1,
        workout_id: 2,
        duration: 20,
        priority: 36
      },
      {
        exercise_id: 5,
        workout_id: 2,
        duration: 20,
        priority: 37
      },
      {
        exercise_id: 4,
        workout_id: 2,
        duration: 20,
        priority: 38
      },
      {
        exercise_id: 6,
        workout_id: 2,
        duration: 20,
        priority: 39
      },
      {
        exercise_id: 8,
        workout_id: 2,
        duration: 120,
        priority: 40
      },
      {
        exercise_id: 3,
        workout_id: 2,
        duration: 10,
        priority: 41
      },
      {
        exercise_id: 2,
        workout_id: 2,
        duration: 20,
        priority: 42
      },
      {
        exercise_id: 3,
        workout_id: 2,
        duration: 10,
        priority: 43
      },
      {
        exercise_id: 1,
        workout_id: 2,
        duration: 20,
        priority: 44
      },
      {
        exercise_id: 7,
        workout_id: 2,
        duration: 10,
        priority: 45
      },
      {
        exercise_id: 1,
        workout_id: 2,
        duration: 20,
        priority: 46
      },
      {
        exercise_id: 5,
        workout_id: 2,
        duration: 20,
        priority: 47
      },
      {
        exercise_id: 4,
        workout_id: 2,
        duration: 20,
        priority: 48
      },
      {
        exercise_id: 6,
        workout_id: 2,
        duration: 20,
        priority: 49
      },
      /* Advanced */
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 1
      },
      {
        exercise_id: 2,
        workout_id: 3,
        duration: 20,
        priority: 2
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 3
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 4
      },
      {
        exercise_id: 7,
        workout_id: 3,
        duration: 10,
        priority: 5
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 6
      },
      {
        exercise_id: 5,
        workout_id: 3,
        duration: 20,
        priority: 7
      },
      {
        exercise_id: 4,
        workout_id: 3,
        duration: 20,
        priority: 8
      },
      {
        exercise_id: 6,
        workout_id: 3,
        duration: 20,
        priority: 9
      },
      {
        exercise_id: 8,
        workout_id: 3,
        duration: 120,
        priority: 10
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 11
      },
      {
        exercise_id: 2,
        workout_id: 3,
        duration: 20,
        priority: 12
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 13
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 14
      },
      {
        exercise_id: 7,
        workout_id: 3,
        duration: 10,
        priority: 15
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 16
      },
      {
        exercise_id: 5,
        workout_id: 3,
        duration: 20,
        priority: 17
      },
      {
        exercise_id: 4,
        workout_id: 3,
        duration: 20,
        priority: 18
      },
      {
        exercise_id: 6,
        workout_id: 3,
        duration: 20,
        priority: 19
      },
      {
        exercise_id: 8,
        workout_id: 3,
        duration: 120,
        priority: 20
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 21
      },
      {
        exercise_id: 2,
        workout_id: 3,
        duration: 20,
        priority: 22
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 23
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 24
      },
      {
        exercise_id: 7,
        workout_id: 3,
        duration: 10,
        priority: 25
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 26
      },
      {
        exercise_id: 5,
        workout_id: 3,
        duration: 20,
        priority: 27
      },
      {
        exercise_id: 4,
        workout_id: 3,
        duration: 20,
        priority: 28
      },
      {
        exercise_id: 6,
        workout_id: 3,
        duration: 20,
        priority: 29
      },
      {
        exercise_id: 8,
        workout_id: 3,
        duration: 120,
        priority: 30
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 31
      },
      {
        exercise_id: 2,
        workout_id: 3,
        duration: 20,
        priority: 32
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 33
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 34
      },
      {
        exercise_id: 7,
        workout_id: 3,
        duration: 10,
        priority: 35
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 36
      },
      {
        exercise_id: 5,
        workout_id: 3,
        duration: 20,
        priority: 37
      },
      {
        exercise_id: 4,
        workout_id: 3,
        duration: 20,
        priority: 38
      },
      {
        exercise_id: 6,
        workout_id: 3,
        duration: 20,
        priority: 39
      },
      {
        exercise_id: 8,
        workout_id: 3,
        duration: 120,
        priority: 40
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 41
      },
      {
        exercise_id: 2,
        workout_id: 3,
        duration: 20,
        priority: 42
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 43
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 44
      },
      {
        exercise_id: 7,
        workout_id: 3,
        duration: 10,
        priority: 45
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 46
      },
      {
        exercise_id: 5,
        workout_id: 3,
        duration: 20,
        priority: 47
      },
      {
        exercise_id: 4,
        workout_id: 3,
        duration: 20,
        priority: 48
      },
      {
        exercise_id: 6,
        workout_id: 3,
        duration: 20,
        priority: 49
      },
      {
        exercise_id: 8,
        workout_id: 3,
        duration: 120,
        priority: 50
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 51
      },
      {
        exercise_id: 2,
        workout_id: 3,
        duration: 20,
        priority: 52
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 53
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 54
      },
      {
        exercise_id: 7,
        workout_id: 3,
        duration: 10,
        priority: 55
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 56
      },
      {
        exercise_id: 5,
        workout_id: 3,
        duration: 20,
        priority: 57
      },
      {
        exercise_id: 4,
        workout_id: 3,
        duration: 20,
        priority: 58
      },
      {
        exercise_id: 6,
        workout_id: 3,
        duration: 20,
        priority: 59
      },
      {
        exercise_id: 8,
        workout_id: 3,
        duration: 120,
        priority: 60
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 61
      },
      {
        exercise_id: 2,
        workout_id: 3,
        duration: 20,
        priority: 62
      },
      {
        exercise_id: 3,
        workout_id: 3,
        duration: 10,
        priority: 63
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 64
      },
      {
        exercise_id: 7,
        workout_id: 3,
        duration: 10,
        priority: 65
      },
      {
        exercise_id: 1,
        workout_id: 3,
        duration: 20,
        priority: 66
      },
      {
        exercise_id: 5,
        workout_id: 3,
        duration: 20,
        priority: 67
      },
      {
        exercise_id: 4,
        workout_id: 3,
        duration: 20,
        priority: 68
      },
      {
        exercise_id: 6,
        workout_id: 3,
        duration: 20,
        priority: 69
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('workout_exercises', null, {truncate: true, restartIdentity: true});
  }
};
