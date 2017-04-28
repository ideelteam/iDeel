"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class TaskModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            listId: Number,
            tasks: [{
                    description: String,
                    taskId: Number,
                    shared: String,
                    status: String
                }]
        }, { collection: 'tasks' });
    }
    createModel() {
        this.model = mongooseConnection.model("Task", this.schema);
    }
    retrieveTasksDetails(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveTasksCount(response, filter) {
        var query = this.model.find(filter).select('tasks').count();
        query.exec((err, numberOfTasks) => {
            console.log('number of tasks: ' + numberOfTasks);
            response.json(numberOfTasks);
        });
    }
}
exports.default = TaskModel;
