"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const JobModel_1 = require("./model/JobModel");
const UserWorkerModel_1 = require("./model/UserWorkerModel");
const UserBusinessModel_1 = require("./model/UserBusinessModel");
let passport = require('passport');
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
        //this.Passport = new PassportAuthentication(this.UserBusiness, this.UserWorker);
        this.mail = new sendMail_1.default();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(session({ secret: 'keyboard cat' }));
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
        router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));
        router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/', successRedirect: '/dashboard' }));
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
            if (check) {
                this.UserBusiness.addNewUser(res, info);
            }
            else {
                this.UserWorker.addNewUser(res, info);
            }
        });
        router.post('/api/login', (req, res, next) => {
            let un = req.body.username;
            let pass = req.body.password;
            let isBusiness = req.body.isBusinessUser;
            if (isBusiness) {
                let returnUser = this.UserBusiness.retrieveOneByUserName(res, { username: un });
            }
            else {
                let returnUser = this.UserWorker.retrieveOneByUserName(res, { username: un });
            }
        });
        // For Jobs Stuff
        router.get('/api/jobs', (req, res) => {
            this.Job.retrieveAll(res);
        });
        router.get('/api/jobs/:id', (req, res) => {
            var id = req.params.id;
            this.Job.retrieveJob(res, { 'jobID': id });
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
