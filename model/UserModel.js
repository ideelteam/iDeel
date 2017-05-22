"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class UserModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            userID: String,
            firstName: String,
            lastName: String,
            email: String,
            status: String,
            jobTags: String,
            username: String,
            password: String
        }, { collection: 'users' });
    }
    createModel() {
        this.model = mongooseConnection.model("users", this.schema);
    }
    //Do some function response here with json here
    retreiveOneUser(response, userID) {
        var query = this.model.findOne(userID);
        query.exec((err, oneUser) => {
            response.json(oneUser);
        });
    }
}
exports.default = UserModel;
