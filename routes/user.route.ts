import { Router } from 'express';

import { check } from 'express-validator';

import { validateJWT } from '../middlewares/jwt.middleware';

import {
    getUsers,
    getUser,
    postUser,
    deleteUser,
    putUser
} from '../controllers/user.controller';

const router = Router();

router.get('/', [
    validateJWT
] ,getUsers)


router.get('/:id',[
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
], getUser)


router.post('/',[
    validateJWT
], postUser)


router.put('/:id',[
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
], putUser )


router.delete('/:id',[
    validateJWT,
    check('id', 'No es un ID valido').isMongoId(),
], deleteUser)



export default router;