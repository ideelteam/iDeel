import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IJobModelModel from '../interfaces/IJobModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class ListModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
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
            }, {collection: 'lists'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IJobModelModel>("jobInfo", this.schema);
    }

    //Do some function response here with json here
}