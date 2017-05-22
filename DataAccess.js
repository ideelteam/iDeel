"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
DataAccess.DB_CONNECTION_STRING = 'mongodb://ideelAdmin:ideelAdmin2017@localhost:27017/ideeldb';
DataAccess.connect();
exports.default = DataAccess;