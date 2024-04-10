'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'password', {
      type: Sequelize.STRING(30),
      allowNull: false,
    });
 },

 async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'password');
 },
};
