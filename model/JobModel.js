"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class JobModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            jobID: Number,
            businessID: Number,
            title: String,
            description: String,
            companyName: String,
            city: String,
            phoneNo: Number,
            salary: Number,
            startDate: Date,
            endDate: Date,
            availability: Boolean,
        }, { collection: 'jobs' });
    }
    createModel() {
        this.model = mongooseConnection.model("jobs", this.schema);
    }
    //Do some function response here with json here
    retreiveJobs(response) {
        var query = this.model.find({});
        query.exec((err, jobArray) => {
            response.json(jobArray);
        });
    }
}
exports.default = JobModel;
