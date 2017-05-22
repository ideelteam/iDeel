import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    userID: number;
    firstName: string;
    lastName: string;
    email: string;
    status: string;
    jobTags: string;
    userName: string;
    password: string;
}

export default IUserModel;