'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_penjualan_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kd_penjualan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tbl_penjualans', key: 'id'}
      },
      kd_obat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tbl_obats', key: 'id' }
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
    await queryInterface.dropTable('tbl_penjualan_details');
  }
};