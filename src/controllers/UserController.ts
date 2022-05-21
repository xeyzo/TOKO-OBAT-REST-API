import { Request, Response } from "express";
import ControllerInterface from "./ControllerInterface";

let data: any[] = [
    { id: 1, nama: "sandi", password:"12345" },
    { id: 2, nama: "udin", password:"12345" },
    { id: 3, nama: "yosep", password:"12345" },
    { id: 4, nama: "tiwi", password:"12345" }
]

class UserController implements ControllerInterface{

    create(req: Request, res: Response): Response {
        const { id, nama, password } = req.body;

        data.push({
            id : id,
            nama : nama,
            password : password
        });

        return res.send(`terimakasih ${nama} sudah mendaftar`)
    }

    index(req: Request, res: Response): Response {
        return res.send(data)
    }

    find(req: Request, res: Response): Response {
        const { id } = req.params;

        let person = data.find(data => data.id == id);

        return res.send(person);
    }

    update(req: Request, res: Response): Response {
        const { id } = req.params;

        const { nama, password } = req.body;

        let person = data.find(data => data.id == id);

        person.nama = nama;
        person.password = password;

        return res.send(`profil person user id ${id} telah di update`)


    }

    delete(req: Request, res: Response): Response {
        const { id } = req.params;
        let person = data.filter(data => data.id != id);
        
        return res.send(person)
    }

}

export default  new UserController();