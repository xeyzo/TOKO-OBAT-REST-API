import { Request } from "express";
const db = require("../db/models");

class SuplierService {
    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const suplier = await db.tbl_suplier.findAll({
            attributes: ['id', 'nama_suplier', 'alamat', 'kota', 'telpon' ]
        })

        return suplier;
    }

    create = async () => {
        const { nama_suplier, alamat, kota, telpon } = this.body;

        const suplier = await db.tbl_suplier.create({
            nama_suplier, alamat, kota, telpon 
        })

        return suplier;
    }

    getOne = async () => {
        const { id } = this.params

            const suplier = await db.tbl_suplier.findOne({
                where: { id },
                attributes: ['id', 'nama_suplier', 'alamat', 'kota', 'telpon', 'createdAt', 'updatedAt']
            })

        return suplier;
    }
    
    update = async () => {
        const { id } = this.params;
        const { nama_suplier , alamat, kota, telpon } = this.body;

        const suplier =  await db.tbl_suplier.update({
            nama_suplier , alamat, kota, telpon
        },{
            where: { id }
        })

        return suplier;
    
    }

    delete = async () => {
        const { id } = this.params;

        const suplier = await db.tbl_suplier.destroy({
            where : { id }
        })


        return suplier;
    }
}

export default SuplierService;