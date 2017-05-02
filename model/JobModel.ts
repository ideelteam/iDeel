import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IJobModelModel from '../interfaces/IJobModel';

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
            }, { collection: 'jobs' }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IJobModelModel>("jobs", this.schema);
    }

    //Do some function response here with json here

    public retreiveAll(response: any): any {
        var query = this.model.find({});
        query.exec((err, listOfJobs) => {
            response.json(listOfJobs);
        });
    }
    
    public retreiveJob(response: any, filter:Object): any {
        var query = this.model.findOne(filter);
        query.exec((err, jobArray) => {
            response.json(jobArray);
        });
    }
}