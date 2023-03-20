import { Request, Response } from 'express'
import Category from '../models/categories.model'

export const getAllCategory = async (req: Request, res: Response) => {
    try {

        const category = await Category.find({ status: true }).sort({ order: 1 })

        res.json({
            data: category
        });

    } catch (error) {
        console.log(error)
    }
}