'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students',
      [
        {
          name: 'Pessoa Estudante',
          email: 'pessoa.estudante@betrybe.com',
          birthday: '1983-10-21T07:00:00',
          active: true,
          id_course: 1,
        },
        {
          name: 'Pessoa Estudante 2',
          email: 'pessoa.estudante.2@betrybe.com',
          birthday: '1994-06-21T07:00:00',
          active: true,
          id_course: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  },
};