import { Request, Response } from "express";
import PenjualanService from "../services/PenjualanService";

const db = require('../db/models')

class PenjualanController {
    create = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: PenjualanService = new PenjualanService(req);

            const penjualan = await service.create();


            return res.send({
                data : penjualan,
                message: "data berhasil di simpan"
            })

        } catch (error) {
            res.send("data gagal di save")
        }
           
    };

    index = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: PenjualanService = new PenjualanService(req);

            const penjualan = await service.getAll();
    
            return res.send({
                data : penjualan
            })
        } catch (error) {
            res.send({
                message:"data kosong"
            }).status(401)
        }
    };

    find = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: PenjualanService = new PenjualanService(req);

            const penjualan = await service.getOne();

            return res.send({
                data: penjualan,
                message:"data berhasil ditemukan" 
            }).status(200)
        } catch (error) {
            res.send("data yang anda cari tidak tersedia").status(401)
        }
    };

    update = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: PenjualanService = new PenjualanService(req);

            const penjualan = await service.update();

            return res.send({
                data: penjualan,
                message:"data berhasil diperbarui"
            })

        } catch (error) {
            res.send("data gagal diperbaharui").status(401) 
        }
    };

    delete = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: PenjualanService = new PenjualanService(req);

            await service.delete();

            return res.send({
                message: "data berhasil dihapus"
            }).status(200)
        } catch (error) {
            res.send(error)
        }
    };
    
}


export default  new PenjualanController();