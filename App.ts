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

        router.use( (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        router.get('/', (req, res) => {
            res.send("This is the homepage of Node Server");
        });

        router.get('/api/jobs', (req, res) => {
            this.Job.retrieveAll(res);
        });

        router.get('/api/jobs/:id', (req, res) => {
            let id = req.params.id;
            this.Job.retrieveOneJob(res, {jobID: id});
        });

        router.get('/api/users/:username', (req, res) => {
            let u = req.params.username;
            this.User.retrieveOneUser(res, {userName: u});
        });

        router.post('/api/jobs', (req, res) => {
            let newJob = req.body;
            this.Job.model.create([newJob], (err) => {
                if(err){
                    console.log("Create new Job fail. Check Post /api/jobs/");
                }
            });
            res.end();      
        });
        
        this.express.use('/', router);        
    }
}
export default new App().express;