'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("course_modules", {
      id_course: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "courses",
          key: "id",
        },
        onDelete: "CASCADE",
        primaryKey: true,
      },
      id_module: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "modules",
          key: "id",
        },
        onDelete: "CASCADE",
        primaryKey: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("course_modules");
  },
};