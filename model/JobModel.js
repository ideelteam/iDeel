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
            title: String,
            description: String,
            companyName: String,
            city: String,
            salary: String,
            availability: Boolean,
        }, { collection: 'jobs' });
    }
    createModel() {
        this.model = mongooseConnection.model("jobs", this.schema);
    }
    retrieveAll(response) {
        let query = this.model.find({});
        query.exec((err, listOfJobs) => {
            if (err) {
                console.log("Error in JobModel retreiveAll");
            }
            response.json(listOfJobs);
        });
    }
    retrieveOneJob(response, jobID) {
        let query = this.model.findOne(jobID);
        query.exec((err, oneJob) => {
            if (err) {
                console.log("Error in JobModel retreiveOneJob");
            }
            console.log(oneJob);
            response.json(oneJob);
        });
    }
}
exports.default = JobModel;
