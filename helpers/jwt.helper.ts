import jwt from 'jsonwebtoken';

export interface IPayload {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
}

export const generateJWTToken = ({ uid, email, firstName, lastName }: IPayload) => {
   return new Promise((resolve, reject) => {

        const payload = { uid, email, firstName, lastName };

        jwt.sign( payload, `${ process.env.SECRETORPRIVATEKEY }`, {
            expiresIn: '4h',
            issuer: 'ontaz-api',
        },( err, token )=> {
            if ( err ){
                console.log( err );
                reject( 'Failed to generate token' );
            }else{
                resolve( token );
            }
        })
   })
}