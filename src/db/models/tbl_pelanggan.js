'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_pelanggan = sequelize.define('tbl_pelanggan', {
    nama_pelanggan: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kota: DataTypes.STRING,
    telpon: DataTypes.STRING
  }, {});
  tbl_pelanggan.associate = function(models) {
    tbl_pelanggan.hasMany(models.tbl_penjualan)
  };
  return tbl_pelanggan;
};


