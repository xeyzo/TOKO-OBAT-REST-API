import { Request } from "express";
const db = require("../db/models");

class PenjualanDetailService {
    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const index = await db.tbl_penjualan_detail.findAll({
            attributes: ['id', 'kd_penjualan', 'kd_obat', 'jumlah']
        })

        return index;
    }

    create = async () => {
        const {  kd_penjualan, kd_obat, jumlah } = this.body;

        const penjualan = await db.tbl_penjualan_detail.create({
            kd_penjualan, kd_obat, jumlah        })

        return penjualan;
    }

    getOne = async () => {
        const { id } = this.params;

        const penjualan = await db.tbl_penjualan_detail.findOne({
            where: { id },
            attributes: ['id', 'kd_penjualan', 'kd_obat', 'jumlah', 'createdAt', 'updatedAt']
        })

        return penjualan;
    }

    update = async () => {
        const { id } = this.params;
        const { kd_penjualan, kd_obat, jumlah } = this.body;

        const penjualan =  await db.tbl_penjualan_detail.update({
            kd_penjualan, kd_obat, jumlah
        },{
            where: { id }
        })

        return penjualan;
    
    }

    delete = async () => {
        const { id } = this.params;

        const penjualan = await db.tbl_penjualan_detail.destroy({
            where : { id }
        })


        return penjualan;
    }
}

export default PenjualanDetailService;