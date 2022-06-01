import { Request, Response } from "express";
import SuplierService from "../services/SuplierService";

const db = require('../db/models')

class ObatController {
    create = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: SuplierService = new SuplierService(req);

            const suplier = await service.create();


            return res.send({
                data : suplier,
                message: "data berhasil di simpan"
            })

        } catch (error) {
            res.send("data gagal di save")
        }
           
    };

    index = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: SuplierService = new SuplierService(req);

            const suplier = await service.getAll();
    
            return res.send({
                data : suplier
            })
        } catch (error) {
            res.send({
                message:"data kosong"
            }).status(401)
        }
    };

    find = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: SuplierService = new SuplierService(req);

            const suplier = await service.getOne();
        
            return res.send({
                data: suplier,
                message:"data berhasil ditemukan" 
            }).status(200)
        } catch (error) {
            res.send("data yang anda cari tidak tersedia").status(401)
        }
    };

    update = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: SuplierService = new SuplierService(req);

            const suplier = await service.update();

            return res.send({
                data:suplier,
                message:"data berhasil diperbarui"
            })

        } catch (error) {
            res.send("data gagal diperbaharui").status(401) 
        }
    };

    delete = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: SuplierService = new SuplierService(req);

            await service.delete();

            return res.send({
                message: "data berhasil dihapus"
            }).status(200)
        } catch (error) {
            res.send(error)
        }
    };
    
}


export default  new ObatController();