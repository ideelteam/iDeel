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
            name: String,
            description: String,
            listId: Number,
            due: String,
            state: String,
            owner: String
        }, { collection: 'lists' });
    }
    createModel() {
        this.model = mongooseConnection.model("Lists", this.schema);
    }
    retrieveAllLists(response) {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
}
exports.default = ListModel;
