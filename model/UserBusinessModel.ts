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
                businessID: Number,
                firstName: String,
                lastName: String,
                email: String,
                address: String,
                city: String,
                zipcode: String,
                jobTags: String,
                companyName: String,
                description: String,
                companyLicenseNo: String,
                username: String,
                password: String,
                pictureID: Number,
                subscribers: Array,
                tags: Array,
                employees: Array,
               // picturePhoto: {data:Buffer, contentType:String}

            }, {collection: 'userBusiness'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserBusinessModel>("userBusiness", this.schema);
    }
    public retreiveAll(response:any): any{
        var query = this.model.find({});
        query.exec((err, businessArray) => {
            response.json(businessArray);
        });
    }

    public retreiveOne(res: any, filter: Object) {
        let query = this.model.find(filter);
        query.exec((err, oneBusinessUser) => {
            if(oneBusinessUser.businessID==null){
                res.send(err);
            }else{
                res.json(oneBusinessUser);                
            }
        })
    }

    public findOneBusiness(res:any, id:number):void{
        var query = this.model.findOne({'businessID':id});
        console.log("AHH");
        query.exec((err,data) => {
            res.json(data);
        });
    }


    //Do some function response here with json here
}