'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_suplier = sequelize.define('tbl_suplier', {
    nama_suplier: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kota: DataTypes.STRING,
    telpon: DataTypes.STRING,
  }, {});
  tbl_suplier.associate = function(models) {
    tbl_suplier.hasMany(models.tbl_obat)
    tbl_suplier.hasMany(models.tbl_pembelian)
  };
  return tbl_suplier;
};