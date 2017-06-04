import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import * as cors from "cors";
import * as nodemailer from 'nodemailer';
import * as jwt from 'json-web-token';
import * as passport from 'passport';

import DataAccess from './DataAccess';
import JobModel from './model/JobModel';
import UserWorkerModel from './model/UserWorkerModel';
import UserBusinessModel from './model/UserBusinessModel';
import FacebookPassportObj from './FacebookPassport';

let passport = require('passport');

import sendMail from './Controllers/sendMail';

// Creates and configures an ExpressJS web server.
class App {
    // ref to Express instance
    public express: express.Application;
    public Job: JobModel;
    public UserWorker: UserWorkerModel;
    public UserBusiness: UserBusinessModel;
    public mail: sendMail;
    private businessIDCount : number;
    private userIDCount: number;
    
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();

        this.Job = new JobModel();
        this.UserWorker = new UserWorkerModel();
        this.UserBusiness = new UserBusinessModel();
        //this.Passport = new PassportAuthentication(this.UserBusiness, this.UserWorker);
        this.mail = new sendMail();
    }
    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(passport.initialize());
        this.express.use(passport.session());
    }
    // Configure API endpoints.
    private routes(): void {
        let router = express.Router();

        const options:cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };       
    
        router.use(cors(options));
        router.options("*", cors(options));

        //this.Passport.authenticateBUser(passport);
        //this.Passport.authenticateWUser(passport);

// For Users Stuff
        router.get('/api/users/bUsers', (req, res) => {
            this.UserBusiness.retrieveAll(res);
        });

        router.get('/api/users/wUsers', (req, res) => {
            this.UserWorker.retrieveAll(res);
        });

        router.post('/api/users/register', (req, res, next) => {
            let info = req.body;
            let check = info.isBusinessUser;
            delete info.isBusinessUser;
            if(check){
                this.UserBusiness.addNewUser(res,info);
            } else {
                this.UserWorker.addNewUser(res, info);
            }
        });

        router.post('/api/login', (req, res, next) => {
            let un = req.body.username;
            let pass = req.body.password;
            let isBusiness = req.body.isBusinessUser;
            if (isBusiness){
                let returnUser = this.UserBusiness.retrieveOneByUserName(res, {username: un});
            } else {
                let returnUser = this.UserWorker.retrieveOneByUserName(res, {username: un});
            }
        });

// For Jobs Stuff

        router.get('/api/jobs', (req, res) => {
            this.Job.retrieveAll(res);
        });

        router.get('/api/jobs/:id',(req,res) => {
            var id = req.params.id;  
            this.Job.retrieveJob(res, {'jobID': id});
        });

        router.post('/api/jobs', (req, res) => {
            var newJob = req.body;
            this.Job.model.create([newJob],(err)=>{
                if(err){
                    console.log('object creation failed');
                }
            })
            res.end();       
        });

        //Currently updating database generated id '_id'
        //Will need to modify the route once we have our unique jobID
        //We will use the jobID to update
        router.put("/api/jobs/:id", (req,res) => {
            var id = req.params.id;
            this.Job.updateJob(req, res);
        });

        //Currently deleting using the database generated id '_id'
        //Will need to modify the route once we have our unique jobID
        //We will use the jobID to delete
        router.delete("/api/jobs/:id", (req,res) => {
            var id = req.params.id;
           this.Job.deleteJob(res, id);
        });
        
        router.get('/api/sendWorker', (req,res) => {
            this.mail.sendEmailWorker();
        });

        router.get('/api/sendBusiness', (req,res) => {     
            this.mail.sendEmailBusiness();    
        });

        router.get('*', (req, res) => {
            res.sendFile(__dirname + '/dist/index.html');
        });

        this.express.use('/', router);
        this.express.use('/', express.static(__dirname+'/dist'));
    }
}
export default new App().express;