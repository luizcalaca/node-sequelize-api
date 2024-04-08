'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "course_modules",
      [
        {
          id_course: 1,
          id_module: 1,
        },
        {
          id_course: 1,
          id_module: 2,
        },
        {
          id_course: 1,
          id_module: 3,
        },
        {
          id_course: 1,
          id_module: 4,
        },
        {
          id_course: 2,
          id_module: 1,
        },
        {
          id_course: 2,
          id_module: 3,
        },
        {
          id_course: 2,
          id_module: 5,
        },
        {
          id_course: 3,
          id_module: 1,
        },
        {
          id_course: 3,
          id_module: 2,
        },
        {
          id_course: 3,
          id_module: 6,
        },
        {
          id_course: 3,
          id_module: 7,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("course_modules", null, {});
  },
};