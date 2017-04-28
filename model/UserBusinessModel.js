"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class ListModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
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
            picturePhoto: { data: Buffer, contentType: String }
        }, { collection: 'lists' });
    }
    createModel() {
        this.model = mongooseConnection.model("businessUserInfo", this.schema);
    }
}
exports.default = ListModel;
