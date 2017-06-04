"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class UserBusinessModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
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
        }, { collection: 'userBusiness' });
    }
    createModel() {
        this.model = mongooseConnection.model("userBusiness", this.schema);
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
        query.exec((err, oneBusinessUserInfo) => {
            return res.json(oneBusinessUserInfo);
        });
    }
    addNewUser(res, info) {
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
            if (err) {
                res.json({ success: false, msg: "Fail to create new bUsers" });
            }
            else {
                res.json({ success: true, msg: "Successful create new bUsers" });
            }
        });
    }
}
exports.default = UserBusinessModel;
