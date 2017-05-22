import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IJobModel from '../interfaces/IJobModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class JobModel {
    public schema: Mongoose.Schema;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = mongoose.Schema(
            {
                jobID: Number,
                title: String,
                description: String,
                companyName: String,
                city: String,
                salary: String,
                availability: Boolean,
            }, { collection: 'jobs' }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IJobModel>("jobs", this.schema);
    }

    public retreiveAll(response: any): any {
        let query = this.model.find({});
        query.exec((err, listOfJobs) => {
            response.json(listOfJobs);
        });
    }

    public retreiveOneJob(response: any, jobID: Object): any {
        var query = this.model.findOne(jobID);
        query.exec((err, oneJob) => {
            response.json(oneJob);
        });
    }
}