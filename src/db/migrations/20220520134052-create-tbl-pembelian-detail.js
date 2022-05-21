'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_pembelian_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kd_pembelian: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model : 'tbl_pembelians', key: 'id'}
      },
      kd_obat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tbl_obats', key: 'id'}
      },
      jumlah: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_pembelian_details');
  }
};