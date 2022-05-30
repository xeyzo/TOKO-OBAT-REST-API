import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validate = [
    check('username').isString(),
    check('password').isLength({ min : 6 }),
    check('email').isEmail(),
    check('alamat').isString(),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors : errors.array() })           
        }

       return next();
    }
]

export default validate; 
