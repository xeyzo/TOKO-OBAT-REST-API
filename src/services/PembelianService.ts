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
        const index = await db.tbl_pembelian.findAll({
            attributes: ['id', 'kd_suplier', 'diskon']
        })

        return index;
    }

    create = async () => {
        const {  kd_suplier, diskon } = this.body;

        const pembelian = await db.tbl_pembelian.create({
             kd_suplier, diskon
        })

        return pembelian;
    }

    getOne = async () => {
        const { id } = this.params;

        const pembelian = await db.tbl_pembelian.findOne({
            where: { id },
            attributes: ['id', 'kd_suplier', 'diskon', 'createdAt', 'updatedAt']
        })

        return pembelian;
    }

    update = async () => {
        const { id } = this.params;
        const { kd_suplier , diskon } = this.body;

        const pembelian =  await db.tbl_pembelian.update({
            kd_suplier , diskon
        },{
            where: { id }
        })

        return pembelian;
    
    }

    delete = async () => {
        const { id } = this.params;

        const pembelian = await db.tbl_pembelian.destroy({
            where : { id }
        })


        return pembelian;
    }
}

export default PembelianService;