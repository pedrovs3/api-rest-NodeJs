const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Luiz',
      email: 'Luiz1@gmail.com',
      password_hash: await bcryptjs.hash('123456', 5),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Luiz2',
      email: 'Luiz2@gmail.com',
      password_hash: await bcryptjs.hash('12356', 5),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Luiz3',
      email: 'Luiz3@gmail.com',
      password_hash: await bcryptjs.hash('13456', 5),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
