import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/users.model'


export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['x-token'] as string;
    console.log(token)
    if( !token ){
        return res.status(401).json({
            msg: 'There is no token in the request'
        })
    }

    try {

        const { uid }:any = jwt.verify( token, `${ process.env.SECRETORPRIVATEKEY }` );
        const user = await User.findById( uid )

        if( !user ){
            return res.status(401).json({
                msg:'Token no valido - usuario no existe en DB'
            });
        }

        if ( !user.status ){
            return res.status(401).json({
                msg:'Token no valido - usuario con estado: false'
            });
        }

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:'Invalid token'
        })
    }
}