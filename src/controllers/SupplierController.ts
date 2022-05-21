import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";

const db = require('../db/models')

class SupplierController {
    create = async (req: Request, res: Response): Promise<any> => {
        try {
            const { nama_supplier, alamat, kota, telpon } = req.body;

            const create =await db.tbl_supplier.create({
                nama_supplier, alamat, kota, telpon
            })

            if (create) {
                return res.send({
                    data: create,
                    message: "save success"
                }).status(200)
            }

            return res.send(`isi semua field`)
           
        } catch (error) {
            res.send('data gagal di save').status(401)
        }
    };

    // index = async (req: Request, res: Response): Promise<any> => {
    //     const { id } = req.app.locals.credential;
    //     const index = await db.obat.findAll({
    //         where: {user_id: id},
    //         attributes: ['id', 'nama_obat', 'jenis', 'satuan', 'harga_beli', 'harga_jual', 'stok', 'kd_suplier']
    //     })

    //     return res.send({
    //         data : index,
    //         message: "data berhasil di get"
    //     })
    // };

    // find = async (req: Request, res: Response): Promise<any> => {
    //     try {
    //         const { id } = req.params

    //         const findData = await db.obat.findOne({
    //             where : { id }
    //         })

    //         console.log(findData)

    //         return res.send(findData).status(200)
    //     } catch (error) {
    //         res.send(`data tidak ditemukan`).status(401)
    //     }
    // };

    // update = async (req: Request, res: Response): Response {
    //     try {
            
    //     } catch (error) {
            
    //     }
    // };

    // delete = async (req: Request, res: Response): Response {
    //     try {
            
    //     } catch (error) {
            
    //     }
    // };
    
}


export default  new SupplierController();