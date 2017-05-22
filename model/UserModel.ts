import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IUserModel from '../interfaces/IUserModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class UserModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                userID: String,
                firstName: String,
                lastName: String,
                email: String,
                status: String,
                jobTags: String,
                username: String,
                password: String
            }, {collection: 'users'}

        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("users", this.schema);
    }

    //Do some function response here with json here
    public retreiveAll(response:any): any{
        var query = this.model.find({});
        query.exec((err, workerArray) => {
            response.json(workerArray);
        });
    }
}