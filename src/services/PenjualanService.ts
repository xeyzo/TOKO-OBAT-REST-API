import { Request } from "express";
const db = require("../db/models");

class PembelianService {
    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const index = await db.tbl_penjualan.findAll({
            attributes: ['id', 'kd_pelanggan', 'diskon']
        })

        return index;
    }

    create = async () => {
        const {  kd_pelanggan, diskon } = this.body;

        const penjualan = await db.tbl_penjualan.create({
             kd_pelanggan, diskon
        })

        return penjualan;
    }

    getOne = async () => {
        const { id } = this.params;

        const penjualan = await db.tbl_penjualan.findOne({
            where: { id },
            attributes: ['id', 'kd_pelanggan', 'diskon', 'createdAt', 'updatedAt']
        })

        return penjualan;
    }

    update = async () => {
        const { id } = this.params;
        const { kd_pelanggan , diskon } = this.body;

        const penjualan =  await db.tbl_penjualan.update({
            kd_pelanggan , diskon
        },{
            where: { id }
        })

        return penjualan;
    
    }

    delete = async () => {
        const { id } = this.params;

        const penjualan = await db.tbl_penjualan.destroy({
            where : { id }
        })


        return penjualan;
    }
}

export default PembelianService;