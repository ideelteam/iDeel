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
            jobID: Number,
            businessID: Number,
            title: String,
            description: String,
            companyName: String,
            city: String,
            phoneNo: Number,
            salary: Number,
            startDate: Date,
            endDate: Date,
            availability: Boolean,
        }, { collection: 'lists' });
    }
    createModel() {
        this.model = mongooseConnection.model("jobInfo", this.schema);
    }
}
exports.default = ListModel;
