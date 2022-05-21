import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


 class authentication {
     
    public static hash = (password : string ): Promise<string> => {
        return bcrypt.hash(password, 10);
    };

    public static passwordCompare = async (text1 : string, text2: string): Promise<boolean> => {
        const compare = await bcrypt.compare(text1, text2);

        return compare;
    };

    public static generateToken = (id: string, username: string, password: string): string => {
        const secretKey : string = `${process.env.JWT_SECRET_KEY}`
        console.log(secretKey)

        const token : string = jwt.sign({id, username, password}, secretKey)
        
        return token
    }

 }

 export default authentication;