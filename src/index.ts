import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

//Router
import { todoRouter } from "./routes/todo.router";
import { userRouter } from "./routes/user.router"; 
import { authRouter } from "./routes/auth.router";
import { obatRouter } from "./routes/obat.router";
import { suplierRouter } from "./routes/suplier.router";
import { pembelianRouter } from "./routes/pembelian.router";
import { pembelianDetailRouter } from "./routes/pembelian.detail.router";
import { penjualanDetailRouter } from "./routes/penjualan.detail.router";
import { penjualanRouter } from "./routes/penjualan.router";
import { pelangganRouter } from "./routes/pelanggan.router";



dotenv.config()

class App{
    public app : Application;
    
    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void{
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors())
    }

    protected routes(): void{
        this.app.route('/').get((req:Request, res: Response) =>{
            res.send("Hello World")
        });

        this.app.use('/api/v1/user', userRouter);
        this.app.use('/api/v1/auth', authRouter);
        this.app.use('/api/v1/obat', obatRouter);
        this.app.use('/api/v1/suplier', suplierRouter);
        this.app.use('/api/v1/pembelian', pembelianRouter);
        this.app.use('/api/v1/penjualan', penjualanRouter);
        this.app.use('/api/v1/pelanggan', pelangganRouter);
        this.app.use('/api/v1/pembelian_detail', pembelianDetailRouter);
        this.app.use('/api/v1/penjualan_detail', penjualanDetailRouter);




        this.app.use(todoRouter);
    }
}

// mongoose.connect(`${process.env.MONGO_URI}`, (err: any) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(`database connected`);
//     }
// });


const port = process.env.PORT;
const app = new App().app;
app.listen(port, () => {
    console.log(`your application running on port ${port}`)
})
