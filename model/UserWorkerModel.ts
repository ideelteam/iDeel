import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IUserWorkerModel from '../interfaces/IUserWorkerModel';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'json-web-token';
import * as password from 'passport';

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
                workerID: Number,
                firstName: String,
                lastName: String,
                dob: String,
                email: String,
                city: String,
                address: String,
                zipcode: String,
                jobTags: String,
                description: String,
                username: String,
                password: String,
                pictureID: Number,
                resume: String,
                savedList: Array,
                appliedList: Array,
                subscribed: Array,
                //picturePhoto: {data:Buffer, contentType:String}
            }, {collection: 'userWorker'}

        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserWorkerModel>("userWorker", this.schema);
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
        query.exec((err, oneWorkerInfo) => {
            return res.json(oneWorkerInfo);
        });
    }

    public addNewUser(res: any, info: any){
        // bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(info.password, salt, (err, hash) => {
        //         if(err) throw err;
        //         info.password = hash;
        //         this.model.create([info], (err) => {
        //             if (err){
        //                 res.json({success: false, msg: "Fail to create a new wUser"})
        //             } else {
        //                 res.json({success: true, msg: "Successful create a new wUser"})
        //             }
        //         })
        //     })
        // });
        this.model.create(info, (err) => {
            if (err){
                res.json({success: false, msg: "Fail to create new wUsers"})
            } else {
                res.json({success: true, msg: "Successful create new wUsers"})
            }
        });

    }
}
