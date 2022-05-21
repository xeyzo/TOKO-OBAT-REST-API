'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_penjualan_detail = sequelize.define('tbl_penjualan_detail', {
    kd_penjualan: DataTypes.INTEGER,
    kd_obat:DataTypes.INTEGER,
    jumlah:DataTypes.INTEGER
  }, {});
  tbl_penjualan_detail.associate = function(models) {
    tbl_penjualan_detail.belongsTo(models.tbl_penjualan)
    tbl_penjualan_detail.belongsTo(models.tbl_obat)
  };
  return tbl_penjualan_detail;
};