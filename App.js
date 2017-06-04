"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const JobModel_1 = require("./model/JobModel");
const UserWorkerModel_1 = require("./model/UserWorkerModel");
const UserBusinessModel_1 = require("./model/UserBusinessModel");
const sendMail_1 = require("./Controllers/sendMail");
const FacebookPassport_1 = require("./FacebookPassport");
let passport = require('passport');
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.facebookPassportObj = new FacebookPassport_1.default();
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
        this.express.use(session({ secret: 'iDeelTeam' }));
        this.express.use(passport.initialize());
        this.express.use(passport.session());
    }
    validateAuth(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
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
        //Facebook Authentication
        router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));
        router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/', successRedirect: '/list' }));
        // For Users - Business and Worker
        router.get('/api/users/bUsers', (req, res) => {
            this.UserBusiness.retreiveAll(res);
        });
        router.get('/api/users/wUsers', (req, res) => {
            this.UserWorker.retreiveAll(res);
        });
        // For jobs
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
        //Currently updating database generated id '_id'
        //Will need to modify the route once we have our unique jobID
        //We will use the jobID to update
        router.put("/api/jobs/:id", (req, res) => {
            var id = req.params.id;
            this.Job.updateJob(req, res);
        });
        //Currently deleting using the database generated id '_id'
        //Will need to modify the route once we have our unique jobID
        //We will use the jobID to delete
        router.delete("/api/jobs/:id", (req, res) => {
            var id = req.params.id;
            this.Job.deleteJob(res, id);
        });
        // Sending emails
        router.get('/api/sendWorker', (req, res) => {
            this.mail.sendEmailWorker();
        });
        router.get('/api/sendBusiness', (req, res) => {
            this.mail.sendEmailBusiness();
        });
        router.get('*', (req, res) => {
            res.sendFile(__dirname + '/dist/index.html');
        });
        this.express.use('/', router);
        this.express.use('/', express.static(__dirname + '/dist'));
    }
}
exports.default = new App().express;
