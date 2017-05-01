db = db.getSiblingDB('ideeldb');
db.createCollection('jobs');
db.createCollection('userBusiness');
db.createCollection('userWorker');
jobCollection = db.getCollection("jobs");
jobCollection.remove({});
userBusinessCollection = db.getCollection("userBusiness");
userBusinessCollection.remove({});
userWorkerCollection = db.getCollection("userWorker");
userWorkerCollection.remove({});
jobCollection.insert(
    {
        jobID: "1",
        businessID: "100",
        title: "Secretary Assistant",
        description: "This job takes notes at some meeting where people show up with donuts and giraffes",
        companyName: "iDeel",
        city: "Seattle",
        phoneNo: "1462567894",
        salary: "200",
        startDate: "3-4-2017",
        endDate: "3-4-2017",
        availability: true
    }

)
jobCollection.insert(
    {
        jobID: "2",
        businessID: "101",
        title: "Closet Cleaner",
        description: "This job will clean out our closet fulll of horses and green mustard",
        companyName: "Green Management",
        city: "Seattle",
        phoneNo: "4256875213",
        salary: "150",
        startDate: "3-10-2017",
        endDate: "3-10-2017",
        availability: true
    }
)
jobCollection.insert(
    {
        jobID: "3",
        businessID: "102",
        title: "Restaurant Busser",
        description: "This job will be clearing out tables and dish washing",
        companyName: "McDawgnode",
        city: "Seattle",
        phoneNo: "4265754612",
        salary: "100",
        startDate: "3-7-2017",
        endDate: "3-7-2017",
        availability: true
    }
)
userBusinessCollection.insert(
    {
        businessID: "100",
        firstName: "Justin",
        lastName: "Menia",
        email: "noLast@hotmail.com",
        address: "216 31th Ave",
        zipcode: "98421",
        jobTags: "business",
        companyName: "iDeel",
        description: "We are a management firm",
        companyLicenseNo: "34524",
        username: "masterMind",
        password: "pickleT",
        pictureID: "200"
    }
)
userBusinessCollection.insert(
    {
        businessID: "101",
        firstName: "Tin",
        lastName: "Jackin",
        email: "jackin@hotmail.com",
        address: "2313 22th Ave",
        zipcode: "98452",
        jobTags: "business",
        ompanyName: "Green Management",
        description: "We are a green management firm",
        companyLicenseNo: "20231",
        username: "fortyFiveLife",
        password: "makeSomeello",
        pictureID: "201"
    }
)
userBusinessCollection.insert(
    {
        businessID: "102",
        firstName: "Packin",
        lastName: "Slatter",
        email: "slatter@hotmail.com",
        address: "467 1st Ave",
        zipcode: "98413",
        jobTags: "business",
        companyName: "McDawgnode",
        description: "We are a food establishments",
        companyLicenseNo: "11234",
        username: "chialik",
        password: "cucumberSlap",
        pictureID: "202"
    }
)
userWorkerCollection.insert(
    {
        workerID: "1",
        firstName: "Ben",
        lastName: "Nolast",
        dob: "04-24-1990",
        email: "noLast@hotmail.com",
        address: "124 4th E John",
        zipcode: "98421",
        jobTags: "typing",
        description: "I can do a lot of typing and writing and stuff",
        username: "plsdontmakeme",
        password: "somepassword",
        pictureID: "1"
    }
)
userWorkerCollection.insert(
    {
        workerID: "2",
        firstName: "Janice",
        lastName: "kewl",
        dob: "12-24-1990",
        email: "kewlJa@hotmail.com",
        address: "111 12th Mark",
        zipcode: "98241",
        jobTags: "lift",
        description: "I can do heavy lifting and stuff",
        username: "cottenCandy",
        password: "targetiscool",
        pictureID: "2"

    }
)
userWorkerCollection.insert(
    {
        workerID: "3",
        firstName: "Markus",
        lastName: "Evergreen",
        dob: "01-12-1993",
        email: "greenMark@hotmail.com",
        address: "254 20th King",
        zipcode: "98212",
        jobTags: "restaurant",
        description: "I can do some restaurant stuff",
        username: "90skidisrad",
        password: "justinetimberlakeisthebetterone",
        pictureID: "3"
    }
)