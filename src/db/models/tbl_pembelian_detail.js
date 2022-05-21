'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_pembelian_detail = sequelize.define('tbl_pembelian_detail', {
    kd_pembelian: DataTypes.INTEGER,
    kd_obat:DataTypes.INTEGER,
    jumlah:DataTypes.INTEGER
  }, {});
  tbl_pembelian_detail.associate = function(models) {
    tbl_pembelian_detail.belongsTo(models.tbl_pembelian)
    tbl_pembelian_detail.belongsTo(models.tbl_obat)
  };
  return tbl_pembelian_detail;
};