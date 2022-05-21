'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_obats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_obat: {
        type: Sequelize.STRING
      },
      jenis: {
        type: Sequelize.STRING
      },
      satuan: {
        type: Sequelize.INTEGER
      },
      harga_beli: {
        type: Sequelize.INTEGER
      },
      harga_jual: {
        type: Sequelize.INTEGER
      },
      stok: {
        type: Sequelize.INTEGER
      },
      kd_suplier: {
        type: Sequelize.INTEGER,
        references: { model: 'tbl_supliers', key: 'id' },
        allowNull: false
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
    await queryInterface.dropTable('tbl_obats');
  }
};