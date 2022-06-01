import { Request, Response } from "express";
import PembelianDetailService from "../services/PembelianDetailService";

const db = require('../db/models')

class PembelianDetailController {
    create = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: PembelianDetailService = new PembelianDetailService(req);

            const pembelian = await service.create();


            return res.send({
                data : pembelian,
                message: "data berhasil di simpan"
            })

        } catch (error) {
            res.send("data gagal di save")
        }
           
    };

    index = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: PembelianDetailService = new PembelianDetailService(req);

            const pembelian = await service.getAll();
    
            return res.send({
                data : pembelian
            })
        } catch (error) {
            res.send({
                message:"data kosong"
            }).status(401)
        }
    };

    find = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: PembelianDetailService = new PembelianDetailService(req);

            const pembelian = await service.getOne();

            return res.send({
                data: pembelian,
                message:"data berhasil ditemukan" 
            }).status(200)
        } catch (error) {
            res.send("data yang anda cari tidak tersedia").status(401)
        }
    };

    update = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: PembelianDetailService = new PembelianDetailService(req);

            const pembelian = await service.update();

            return res.send({
                data: pembelian,
                message:"data berhasil diperbarui"
            })

        } catch (error) {
            res.send("data gagal diperbaharui").status(401) 
        }
    };

    delete = async (req: Request, res: Response): Promise<any> => {
        try {
            const service: PembelianDetailService = new PembelianDetailService(req);

            await service.delete();

            return res.send({
                message: "data berhasil dihapus"
            }).status(200)
        } catch (error) {
            res.send(error)
        }
    };
    
}


export default  new PembelianDetailController();