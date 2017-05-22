import Mongoose = require("mongoose");

interface IJobModel extends Mongoose.Document {
    jobID: number;
    title: string;
    description: string;
    companyName: string;
    city: string;
    salary: string;
    availability: boolean;
}

export default IJobModel;