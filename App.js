"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const ListModel_1 = require("./model/ListModel");
const TaskModel_1 = require("./model/TaskModel");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Lists = new ListModel_1.default();
        this.Tasks = new TaskModel_1.default();
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
        router.get('/app/list/:listId/count', (req, res) => {
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            this.Tasks.retrieveTasksCount(res, { listId: id });
        });
        router.post('/app/list/', (req, res) => {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.listId = this.idGenerator;
            this.Lists.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(this.idGenerator.toString());
            this.idGenerator++;
        });
        router.get('/app/list/:listId', (req, res) => {
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            this.Tasks.retrieveTasksDetails(res, { listId: id });
        });
        router.get('/app/list/', (req, res) => {
            console.log('Query All list');
            this.Lists.retrieveAllLists(res);
        });
        this.express.use('/', router);
        this.express.use('/app/json/', express.static(__dirname + '/app/json'));
        this.express.use('/images', express.static(__dirname + '/img'));
        this.express.use('/', express.static(__dirname + '/pages'));
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map