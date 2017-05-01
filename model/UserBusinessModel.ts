import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IUserBusinessModel from '../interfaces/IUserBusinessModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class UserBusinessModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                businessID: String,
                firstName: String,
                lastName: String,
                email: String,
                address: String,
                zipcode: Number,
                jobTags: String,
                companyName: String,
                description: String,
                companyLicenseNo: String,
                username: String,
                password: String,
                pictureID: Number,
               // picturePhoto: {data:Buffer, contentType:String}

            }, {collection: 'userBusiness'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserBusinessModel>("userBusiness", this.schema);
    }

    public retrieveAll(res: any): void {
        var query = this.model.find({});
        query.exec((err, aList) => {
            res.json(aList);
        })
    }

    //Do some function response here with json here
}