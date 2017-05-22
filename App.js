"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const JobModel_1 = require("./model/JobModel");
const UserModel_1 = require("./model/UserModel");
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.Job = new JobModel_1.default();
        this.User = new UserModel_1.default();
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
        router.get('/api/jobs', (req, res) => {
            this.Job.retreiveAll(res);
        });
        router.get('/api/jobs/:id', (req, res) => {
            let id = req.params.id;
            this.Job.retreiveOneJob(res, { jobID: id });
        });
        router.get('/api/users/:id', (req, res) => {
            let id = req.params.id;
            this.User.retreiveOneUser(res, { userID: id });
        });
        router.post('/api/jobs', (req, res) => {
            let newJob = req.body;
            this.Job.model.create([], (err) => {
                if (err) {
                    console.log("Create new Job fail. Check Post /api/jobs/");
                }
            });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
