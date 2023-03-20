import express, { Application } from 'express';
import cors from 'cors';

const { dbConnection } = require('../database/config');

import userRoutes from '../routes/user.route';
import authRoutes from '../routes/auth.route';
import categoryRoutes from '../routes/category.route';

class Server {
    private app: Application;
    public port: string;
    private apiPaths = {
        users: '/api/users',
        auth: '/api/auth',
        category: '/api/category',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';


        this.connectionDB();

        this.middlewares();

        this.routes();
    }

    async connectionDB(){
        await dbConnection();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        //body parser
        this.app.use(express.json());
        //public folder
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.category, categoryRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}

export default  Server;