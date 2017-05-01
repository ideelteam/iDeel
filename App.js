"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const JobModel_1 = require("./model/JobModel");
const UserWorkerModel_1 = require("./model/UserWorkerModel");
const UserBusinessModel_1 = require("./model/UserBusinessModel");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        //  this.Lists = new ListModel();
        //  this.Tasks = new TaskModel();
        this.Job = new JobModel_1.default();
        this.UserWorker = new UserWorkerModel_1.default();
        this.UserBusiness = new UserBusinessModel_1.default();
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
        });
        // router.get('/app/list/:listId/count', (req, res) => {
        //     var id = req.params.listId;
        //     console.log('Query single list with id: ' + id);
        //     this.Tasks.retrieveTasksCount(res, {listId: id});
        // });
        // router.post('/app/list/', (req, res) => {
        //     console.log(req.body);
        //     var jsonObj = req.body;
        //     jsonObj.listId = this.idGenerator;
        //     this.Lists.model.create([jsonObj], (err) => {
        //         if (err) {
        //             console.log('object creation failed');
        //         }
        //     });
        //     res.send(this.idGenerator.toString());
        //     this.idGenerator++;
        // });
        // router.get('/app/list/:listId', (req, res) => {
        //     var id = req.params.listId;
        //     console.log('Query single list with id: ' + id);
        //     this.Tasks.retrieveTasksDetails(res, {listId: id});
        // });
        // router.get('/app/list/', (req, res) => {
        //     console.log('Query All list');
        //     this.Lists.retrieveAllLists(res);
        // });
        this.express.use('/', router);
        this.express.use('/app/json/', express.static(__dirname + '/app/json'));
        this.express.use('/images', express.static(__dirname + '/img'));
        this.express.use('/', express.static(__dirname + '/pages'));
    }
}
exports.default = new App().express;
