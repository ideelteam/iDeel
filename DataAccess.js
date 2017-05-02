"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
class DataAccess {
    //static DB_CONNECTION_STRING:string = 'mongodb://ideelregistration-shard-00-00-vplo9.mongodb.net:27017,ideelregistration-shard-00-01-vplo9.mongodb.net:27017,ideelregistration-shard-00-02-vplo9.mongodb.net:27017/test?replicaSet=iDeelRegistration-shard-0" --authenticationDatabase admin --ssl --username iDeelAdmin --password iDeelAdmin123 ';
    //static DB_CONNECTION_STRING:string = 'mongodb://localhost:27017/ideeldb';
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
