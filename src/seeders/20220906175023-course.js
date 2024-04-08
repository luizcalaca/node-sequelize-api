'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses',
    [
      {
        name: 'Fullstack',
        description: 'Formação de P. Desenvolvedora Fullstack Junior',
        creation_date: '2019-06-01T00:00:00',
        active: true,
        duration: 12,
        created_at: '2019-06-01T00:00:00',
        updated_at: '2019-06-01T00:00:00',
      },
      {
        name: 'Backend',
        description: 'Formação de P. Desenvolvedora Back-end Junior',
        creation_date: '2019-06-01T00:00:00',
        active: true,
        duration: 7,
        created_at: '2019-06-01T00:00:00',
        updated_at: '2019-06-01T00:00:00',
      },
      {
        name: 'Mobile',
        description: 'Formação de P. Desenvolvedora Mobile Junior',
        creation_date: '2023-02-01T00:00:00',
        active: false,
        duration: 7,
        created_at: '2019-06-01T00:00:00',
        updated_at: '2019-06-01T00:00:00',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
