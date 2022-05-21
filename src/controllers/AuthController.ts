import { Request, Response } from "express";
import authentication from "../utils/authentication";
import bcrypt from "bcrypt";

const db = require("../db/models")

class AuthController{

    register = async (req: Request, res: Response): Promise<Response> => {
        const { username, password, email, alamat } = req.body;
        const hash : string = await authentication.hash(password);

        const data = await db.user.create({
            username,
            password : hash,
            email,
            alamat
        });

        return res.send(data);
    }

    login = async (req: Request, res: Response): Promise<any> => {
        try {
            const { username, password } = req.body;

            const findUser = await db.user.findOne({
                where : { username }
            })
        
            const data = await authentication.passwordCompare(password, findUser.password)
                
            if(data){
                let token = authentication.generateToken(findUser.id, findUser.username, findUser.password)
    
                return res.send({
                    token
                })
            }
    
            return res.send(`masukkan password yang benar`)
        } catch (error) {
            res.status(201).send(`username tidak ditemukan`)
        }

    }

    profile = (req: Request, res:Response): Response => {
        return res.send(req.app.locals.credential);
    }

    


}

export default  new AuthController();