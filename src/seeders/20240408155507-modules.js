'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "modules",
      [
        {
          name: "Fundamentos",
          description: "Base para programação",
          duration: 2,
          qt_block: 8,
        },
        {
          name: "Frontend",
          description: "Base para programação frontend",
          duration: 2,
          qt_block: 9,
        },
        {
          name: "Backend",
          description: "Base para programação backend",
          duration: 7,
          qt_block: 13,
        },
        {
          name: "CS",
          description: "Base para programação CS",
          duration: 2,
          qt_block: 5,
        },
        {
          name: "Nest.JS",
          description: "Base para Nest.JS",
          duration: 2,
          qt_block: 6,
        },
        {
          name: "React Native",
          description: "Base para programação Mobile com React",
          duration: 2,
          qt_block: 5,
        },
        {
          name: "Flutter",
          description: "Base para programação Mobile com Flutter",
          duration: 2,
          qt_block: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("modules", null, {});
  },
};