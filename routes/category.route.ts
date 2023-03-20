import { Router } from 'express';
import { getAllCategory } from '../controllers/category.controller';
import { validateJWT } from '../middlewares/jwt.middleware';

const router = Router();

router.post('/', [
    validateJWT
] ,getAllCategory)




export default router;