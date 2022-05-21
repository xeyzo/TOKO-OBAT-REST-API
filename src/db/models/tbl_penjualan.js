'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_penjualan = sequelize.define('tbl_penjualan', {
    kd_pelanggan: DataTypes.INTEGER,
    diskon:DataTypes.INTEGER
  }, {});
  tbl_penjualan.associate = function(models) {
    tbl_penjualan.belongsTo(models.tbl_pelanggan)
    tbl_penjualan.hasMany(models.tbl_penjualan_detail)
  };
  return tbl_penjualan;
};