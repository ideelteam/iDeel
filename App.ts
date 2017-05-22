import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';


import DataAccess from './DataAccess';
import JobModel from './model/JobModel';
import UserModel from './model/UserModel';



class App {
    public express: express.Application;
    public Job: JobModel;
    public UserWorker: UserWorkerModel;
    public UserBusiness: UserBusinessModel;
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.Job = new JobModel();
        this.UserWorker = new UserModel();
    }
    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    private routes(): void {
        let router = express.Router();
        
        this.express.use('/', router);        
    }
}
export default new App().express;