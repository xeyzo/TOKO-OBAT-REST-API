import { Request } from "express";
const db = require("../db/models");

class ObatService {
    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const index = await db.tbl_obat.findAll({
            attributes: ['id', 'nama_obat', 'jenis', 'satuan', 'harga_beli', 'harga_jual', 'stok', 'kd_suplier']
        })

        return index;
    }

    create = async () => {
        const { nama_obat, jenis, satuan, harga_beli, harga_jual, stok, kd_suplier } = this.body;

        const obat = await db.tbl_obat.create({
            nama_obat, jenis, satuan, harga_beli, harga_jual, stok, kd_suplier
        })

        return obat;
    }

    getOne = async () => {
        const { id } = this.params;

        const obat = await db.tbl_obat.findOne({
            where: { id },
            attributes: ['id', 'nama_obat', 'jenis', 'satuan', 'harga_beli', 'harga_jual', 'stok', 'kd_suplier', 'createdAt', 'updatedAt']
        })

        return obat;
    }

    update = async () => {
        const { id } = this.params;
        const { satuan, harga_beli, harga_jual ,stok } = this.body;

        const obat =  await db.tbl_obat.update({
            satuan, harga_beli, harga_jual ,stok
        },{
            where: { id }
        })

        return obat;
    
    }

    delete = async () => {
        const { id } = this.params;

        const obat = await db.tbl_obat.destroy({
            where : { id }
        })


        return obat;
    }
}

export default ObatService;