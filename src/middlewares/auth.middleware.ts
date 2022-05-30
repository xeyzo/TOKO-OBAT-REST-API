import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()


export const auth = ( req:Request, res:Response, next:NextFunction ) : any => {
    if (!req.headers.authorization) {
        res.send(`unauthorized`)
    }

    let secretKey: any = `${process.env.JWT_SECRET_KEY}`
    const token : any = req.headers.authorization;

    const berear: string = token.split(' ')[1];

    try {
        const credential : string | object = jwt.verify(berear, secretKey)

        if (credential) {
            req.app.locals.credential = credential
            return next()
        }
        return res.send(`invalid token`)
    } catch (error) {
        res.send(error)
    }


}