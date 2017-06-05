"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const JobModel_1 = require("./model/JobModel");
const UserWorkerModel_1 = require("./model/UserWorkerModel");
const UserBusinessModel_1 = require("./model/UserBusinessModel");
const sendMail_1 = require("./Controllers/sendMail");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.Job = new JobModel_1.default();
        this.UserWorker = new UserWorkerModel_1.default();
        this.UserBusiness = new UserBusinessModel_1.default();
        this.mail = new sendMail_1.default();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        const options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };
        router.use(cors(options));
        router.options("*", cors(options));
        router.get('/api/users/bUsers', (req, res) => {
            this.UserBusiness.retreiveAll(res);
        });
        router.get('/api/users/wUsers', (req, res) => {
            this.UserWorker.retreiveAll(res);
        });
        router.get('/api/jobs', (req, res) => {
            this.Job.retreiveAll(res);
        });
        router.get('/api/jobs/:id', (req, res) => {
            var id = req.params.id;
            this.Job.retreiveJob(res, { 'jobID': id });
        });
        router.post('/api/jobs', (req, res) => {
            var newJob = req.body;
            this.Job.model.create([newJob], (err) => {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.end();
        });
        //Update on job given jobID as argument
        router.put("/api/jobs/:id", (req, res) => {
            var id = req.params.id;
            this.Job.updateJob(req, res, id);
        });
        //Set jobID to appliedlist array of wUser 
        router.put("/api/jobs/:jobID/:wUser", (req, res) => {
            var wUser = req.params.wUser;
            var jobID = req.params.jobID;
            this.Job.addAppliedList(req, res, jobID, wUser);
        });
        //Set wUserID to appliedlist array of job
        router.put("/api/users/:wUser/:jobID", (req, res) => {
            var wUser = req.params.wUser;
            var jobID = req.params.jobID;
            this.UserWorker.addAppliedList(jobID, wUser);
        });
        //Delete one job given jobID as argument
        router.delete("/api/jobs/:id", (req, res) => {
            var id = req.params.id;
            console.log(id);
            this.Job.deleteJob(res, id);
        });
        router.get('/api/sendWorker', (req, res) => {
            this.mail.sendEmailWorker();
        });
        router.get('/api/sendBusiness', (req, res) => {
            this.mail.sendEmailBusiness();
        });
        this.express.use('/', router);
        this.express.use('/', express.static(__dirname + '/dist'));
    }
}
exports.default = new App().express;
