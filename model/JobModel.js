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
            phoneNo: String,
            salary: String,
            startDate: String,
            endDate: String,
            availability: Boolean,
        }, { collection: 'jobs' });
    }
    createModel() {
        this.model = mongooseConnection.model("jobs", this.schema);
    }
    //Do some function response here with json here
    retreiveAll(response) {
        var query = this.model.find({});
        query.exec((err, listOfJobs) => {
            response.json(listOfJobs);
        });
    }
    retreiveJob(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, data) => {
            response.json(data);
        });
    }
    updateJob(req, res) {
        this.model.findById(req.params.id, (err, job) => {
            console.log(req);
            job.title = req.body.title || job.title;
            job.description = req.body.description || job.description;
            job.companyName = req.body.description || job.companyName;
            job.city = req.body.city || job.city;
            job.phoneNo = req.body.phoneNo || job.phoneNo;
            job.salary = req.body.salary || job.salary;
            job.startDate = req.body.startDate || job.startDate;
            job.endDate = req.body.endDate || job.endDate;
            job.save((err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.send(result);
            });
        });
    }
    deleteJob(response, id) {
        var query = this.model.deleteOne({ "_id": id });
        query.exec((err, data) => {
            response.json(data);
        });
    }
}
exports.default = JobModel;
