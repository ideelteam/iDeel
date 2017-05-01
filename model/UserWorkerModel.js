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
        }, { collection: 'workerUser' });
    }
    createModel() {
        this.model = mongooseConnection.model("workerUser", this.schema);
    }
}
exports.default = UserWorkerModel;