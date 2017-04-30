import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IUserBusinessModel from '../interfaces/IUserBusinessModel';

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
            }, {collection: 'lists'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserBusinessModel>("businessUserInfo", this.schema);
    }

    //Do some function response here with json here
}