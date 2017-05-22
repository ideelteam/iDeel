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
    public User: UserModel;
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.Job = new JobModel();
        this.User = new UserModel();
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

        router.get('/api/jobs', (req, res) => {
            this.Job.retreiveAll(res);
        })

        router.get('/api/jobs/:id', (req, res) => {
            let id = req.params.id;
            this.Job.retreiveOneJob(res, {jobID: id});
        })

        router.get('/api/users/:id', (req, res) => {
            let id = req.params.id;
            this.User.retreiveOneUser(res, {userID: id});
        })

        router.post('/api/jobs', (req, res) => {
            let newJob = req.body;
            this.Job.model.create([], (err) => {
                if(err){
                    console.log("Create new Job fail. Check Post /api/jobs/");
                }
            })
        })
        
        this.express.use('/', router);        
    }
}
export default new App().express;