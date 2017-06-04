"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class UserWorkerModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
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
        }, { collection: 'userWorker' });
    }
    createModel() {
        this.model = mongooseConnection.model("userWorker", this.schema);
    }
    //Do some function response here with json here    
    retrieveAll(response) {
        let query = this.model.find({});
        query.exec((err, workerArray) => {
            response.json(workerArray);
        });
    }
    retrieveOneByUserName(res, filter) {
        let query = this.model.find(filter);
        query.exec((err, oneWorkerInfo) => {
            return res.json(oneWorkerInfo);
        });
    }
    addNewUser(res, info) {
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
            if (err) {
                res.json({ success: false, msg: "Fail to create new wUsers" });
            }
            else {
                res.json({ success: true, msg: "Successful create new wUsers" });
            }
        });
    }
}
exports.default = UserWorkerModel;
