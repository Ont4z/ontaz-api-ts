import { Request, Response } from 'express'


export const getUsers = (req: Request, res: Response) => {
    res.json({
        msg: 'get users'
    })
}

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'get user',
        id
    })
}

export const postUser = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        msg: 'post User',
        body
    })
}

export const putUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'put User',
        id
    })
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'delete User',
        id
    })
}