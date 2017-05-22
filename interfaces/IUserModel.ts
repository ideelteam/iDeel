import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    userID: string;
    firstName: string;
    lastName: string;
    email: string;
    status: string;
    jobTags: string;
    username: string;
    password: string;
}

export default IUserModel;