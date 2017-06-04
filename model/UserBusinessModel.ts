import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IUserBusinessModel from '../interfaces/IUserBusinessModel';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'json-web-token';
import * as password from 'passport';


var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class UserBusinessModel {
    public schema:Mongoose.Schema;
    public model:any;
    public numUsers: number;

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

    //Do some function response here with json here
    public retrieveAll(response:any){
        let query = this.model.find({});
        query.exec((err, workerArray) => {
            response.json(workerArray);
        });
    }

    public retrieveOneByUserName(res: any, filter: Object) {
        let query = this.model.find(filter);
        query.exec((err, oneBusinessUserInfo) => {
            return res.json(oneBusinessUserInfo);
        });
    }

    public addNewUser(res: any, info: any){
        // bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(info.password, salt, (err, hash) => {
        //         if(err) throw err;
        //         info.password = hash;
        //         this.model.create(info, (err) => {
        //             if (err){
        //                 res.json({success: false, msg: "Fail to create new bUsers"})
        //             } else {
        //                 res.json({success: true, msg: "Successful create new bUsers"})
        //             }
        //         });
        //     });
        // });
        this.model.create(info, (err) => {
            if (err){
                res.json({success: false, msg: "Fail to create new bUsers"})
            } else {
                res.json({success: true, msg: "Successful create new bUsers"})
            }
        });
    } 
}