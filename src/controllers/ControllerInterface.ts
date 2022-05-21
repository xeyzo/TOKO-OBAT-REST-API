import { Request, Response } from "express";

interface ControllerInterface{
    create(req: Request, res:Response): Response;
    index(req: Request, res:Response): Response;
    find(req: Request, res:Response): Response;
    update(req: Request, res:Response): Response;
    delete(req: Request, res:Response): Response;
}

export default ControllerInterface;