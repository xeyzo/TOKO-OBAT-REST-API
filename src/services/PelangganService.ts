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
        const index = await db.tbl_pelanggan.findAll({
            attributes: ['id', 'nama_pelanggan', 'alamat', 'kota', 'telpon']
        })

        return index;
    }

    create = async () => {
        const { nama_pelanggan, alamat, kota, telpon } = this.body;

        const pelanggan = await db.tbl_pelanggan.create({
            nama_pelanggan, alamat, kota, telpon
        })

        return pelanggan;
    }

    getOne = async () => {
        const { id } = this.params;

        const pelanggan = await db.tbl_pelanggan.findOne({
            where: { id },
            attributes: ['id', 'nama_pelanggan', 'alamat', 'kota', 'telpon', 'createdAt', 'updatedAt']
        })

        return pelanggan;
    }

    update = async () => {
        const { id } = this.params;
        const { nama_pelanggan, alamat, kota, telpon } = this.body;

        const pelanggan =  await db.tbl_pelanggan.update({
            nama_pelanggan, alamat, kota, telpon
        },{
            where: { id }
        })

        return pelanggan;
    
    }

    delete = async () => {
        const { id } = this.params;

        const pelanggan = await db.tbl_pelanggan.destroy({
            where : { id }
        })


        return pelanggan;
    }
}

export default ObatService;