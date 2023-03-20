import { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
//good
import User from '../models/users.model'
import { generateJWTToken } from '../helpers/jwt.helper';

export const loginWithEmailAndPassword = async (req: Request, res: Response) => {
    const { email, password} = req.body;
    const user = await User.findOne({email: email})

    if( !user ){
        return res.status(400).json({
            msg:'Usuario / Password no son correctos'
        })
    }

    if( !user.status ){
        return res.status(400).json({
            msg:'Usuario Inactivo'
        })
    }

    const validatePassword = bcryptjs.compareSync( password, user.password );

    if( !validatePassword ){
        return res.status(400).json({
            msg:'Usuario / Password no son correctos'
        })
    }

    const token = await generateJWTToken({
        uid: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    });

    res.json({
        user,
        token,
        msg: 'Login Success'
    })
}