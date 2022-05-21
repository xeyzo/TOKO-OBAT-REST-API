'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_pembelian = sequelize.define('tbl_pembelian', {
    kd_suplier: DataTypes.INTEGER,
    diskon:DataTypes.INTEGER
  }, {});
  tbl_pembelian.associate = function(models) {
    tbl_pembelian.belongsTo(models.tbl_suplier)
    tbl_pembelian.hasMany(models.tbl_pembelian_detail)
  };
  return tbl_pembelian;
};