import { Request, Response } from "express";

const db = require('../db/models')

class ObatController {
    create = async (req: Request, res: Response): Promise<any> => {
        try {
            const { nama_obat, jenis, satuan, harga_beli, harga_jual, stok, kd_suplier } = req.body;

            const obat = await db.tbl_obat.create({
                nama_obat, jenis, satuan, harga_beli, harga_jual, stok, kd_suplier
            })

            console.log(obat)
            return res.send({
                data : obat,
                message: "data berhasil di simpan"
            })

        } catch (error) {
            res.send("data gagal di save")
        }
           
    };

    index = async (req: Request, res: Response): Promise<any> => {
        try {
            const index = await db.tbl_obat.findAll({
                attributes: ['id', 'nama_obat', 'jenis', 'satuan', 'harga_beli', 'harga_jual', 'stok', 'kd_suplier']
            })
    
            return res.send({
                data : index
            })
        } catch (error) {
            res.send({
                message:"data kosong"
            }).status(401)
        }
    };

    find = async (req: Request, res: Response): Promise<any> => {
        try {
            const { id } = req.params

            const findData = await db.tbl_obat.findOne({
                where: { id },
                attributes: ['id', 'nama_obat', 'jenis', 'satuan', 'harga_beli', 'harga_jual', 'stok', 'kd_suplier', 'createdAt', 'updatedAt']
            })
        
            return res.send({
                data: findData,
                message:"data berhasil ditemukan" 
            }).status(200)
        } catch (error) {
            res.send("data yang anda cari tidak tersedia").status(401)
        }
    };

    update = async (req: Request, res: Response): Promise<any> => {
        try {
            const { id } = req.params;
            const { satuan, harga_beli, harga_jual ,stok } = req.body;

            const obat =  await db.tbl_obat.update({
                satuan, harga_beli, harga_jual ,stok
            },{
                where: { id }
            })
            console.log(obat)

            return res.send({
                message:"data berhasil diperbarui"
            })

        } catch (error) {
            res.send("data gagal diperbaharui").status(401) 
        }
    };

    delete = async (req: Request, res: Response): Promise<any> => {
        try {
            const { id } = req.params;
            
            await db.tbl_obat.destroy({
                where : { id }
            })

            return res.send({
                message: "data berhasil dihapus"
            }).status(200)
        } catch (error) {
            res.send(error)
        }
    };
    
}


export default  new ObatController();