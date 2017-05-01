import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IUserWorkerModel from '../interfaces/IUserWorkerModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class UserWorkerModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
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
                //picturePhoto: {data:Buffer, contentType:String}

            }, {collection: 'userWorker'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserWorkerModel>("userWorker", this.schema);
    }

    //Do some function response here with json here
    public retreiveAll(response:any): any{
        var query = this.model.find({});
        query.exec((err, jobArray) => {
            response.json(jobArray);
        });
    }
}