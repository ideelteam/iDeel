import Mongoose = require("mongoose");

interface IJobModel extends Mongoose.Document {
    jobID: number;
    businessID: number;
    title: string;
    description: string;
    companyName: string;
    city: string;
    phoneNo: number;
    salary: number;
    startDate: Date;
    endDate: Date;
    availability: boolean;
}

export default IJobModel;