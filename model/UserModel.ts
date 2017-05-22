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
                userID: Number,
                firstName: String,
                lastName: String,
                email: String,
                status: String,
                jobTags: String,
                userName: String,
                password: String
            }, {collection: 'users'}

        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("users", this.schema);
    }

    //Do some function response here with json here
    public retrieveOneUser(response: any, userID: Object): any {
        var query = this.model.findOne(userID);
        query.exec((err, oneUser) => {
            response.json(oneUser);
        });
    }
}