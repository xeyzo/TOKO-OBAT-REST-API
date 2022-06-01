import { Request } from "express";
const db = require("../db/models");

class PembelianDetailService {
    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const index = await db.tbl_pembelian_detail.findAll({
            attributes: ['id', 'kd_suplier', 'kd_obat', 'jumlah']
        })

        return index;
    }

    create = async () => {
        const {  kd_suplier, kd_obat, jumlah } = this.body;

        const pembelian = await db.tbl_pembelian_detail.create({
            kd_suplier, kd_obat, jumlah
        })

        return pembelian;
    }

    getOne = async () => {
        const { id } = this.params;

        const pembelian = await db.tbl_pembelian_detail.findOne({
            where: { id },
            attributes: ['id', 'kd_suplier', 'kd_obat', 'jumlah', 'createdAt', 'updatedAt']
        })

        return pembelian;
    }

    update = async () => {
        const { id } = this.params;
        const { kd_suplier , kd_obat, jumlah } = this.body;

        const pembelian =  await db.tbl_pembelian_detail.update({
            kd_suplier , kd_obat, jumlah
        },{
            where: { id }
        })

        return pembelian;
    
    }

    delete = async () => {
        const { id } = this.params;

        const pembelian = await db.tbl_pembelian_detail.destroy({
            where : { id }
        })


        return pembelian;
    }
}

export default PembelianDetailService;