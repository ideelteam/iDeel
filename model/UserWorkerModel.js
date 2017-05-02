"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class UserWorkerModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            workerID: String,
            firstName: String,
            lastName: String,
            dob: String,
            email: String,
            address: String,
            zipcode: Number,
            jobTags: String,
            description: String,
            username: String,
            password: String,
            pictureID: Number,
        }, { collection: 'userWorker' });
    }
    createModel() {
        this.model = mongooseConnection.model("userWorker", this.schema);
    }
    //Do some function response here with json here
    retreiveAll(response) {
        var query = this.model.find({});
        query.exec((err, workerArray) => {
            response.json(workerArray);
        });
    }
}
exports.default = UserWorkerModel;
