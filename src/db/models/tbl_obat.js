'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_obat = sequelize.define('tbl_obat', {
    nama_obat: DataTypes.STRING,
    jenis: DataTypes.STRING,
    satuan: DataTypes.INTEGER,
    harga_beli: DataTypes.INTEGER,
    harga_jual: DataTypes.INTEGER,
    stok: DataTypes.INTEGER,
    kd_suplier: DataTypes.INTEGER
  }, {});
  tbl_obat.associate = function(models) {
    tbl_obat.belongsTo(models.tbl_suplier)
    tbl_obat.hasMany(models.tbl_pembelian_detail)
    tbl_obat.hasMany(models.tbl_penjualan_detail)
  };
  return tbl_obat;
};