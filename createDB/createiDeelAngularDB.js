db = db.getSiblingDB('iDeelAngular');
db.createCollection('jobs');
db.createCollection('users');
jobsCollection = db.getCollection("jobs");
jobsCollection.remove({});
usersCollection = db.getCollection("users");
usersCollection.remove({});

jobsCollection.insert(
    {
        jobID: 1,
        title: "Job1",
        description: "Just 1",
        companyName: "Comp 1",
        city: "City 1",
        salary: "Salary 1",
        availability: true
    }
)

jobsCollection.insert(
    {
        jobID: 1,
        title: "Job1",
        description: "Just 1",
        companyName: "Comp 1",
        city: "City 1",
        salary: "Salary 1",
        availability: true
    }
)

jobsCollection.insert(
    {
        jobID: 1,
        title: "Job1",
        description: "Just 1",
        companyName: "Comp 1",
        city: "City 1",
        salary: "Salary 1",
        availability: true
    }
)

jobsCollection.insert(
    {
        jobID: 1,
        title: "Job1",
        description: "Just 1",
        companyName: "Comp 1",
        city: "City 1",
        salary: "Salary 1",
        availability: true
    }
)

jobsCollection.insert(
    {
        jobID: 1,
        title: "Job1",
        description: "Just 1",
        companyName: "Comp 1",
        city: "City 1",
        salary: "Salary 1",
        availability: true
    }
)

jobsCollection.insert(
    {
        jobID: 1,
        title: "Job1",
        description: "Just 1",
        companyName: "Comp 1",
        city: "City 1",
        salary: "Salary 1",
        availability: true
    }
)

usersCollection.insert(
    {
        userID: 1,
        firstName: "One",
        lastName: "One",
        email: "One@one.com",
        status: "Job Finder"
        jobTags: "Job Tag 1",
        username: "user1",
        password: "one"
    }
)

usersCollection.insert(
    {
        userID: 2,
        firstName: "Two",
        lastName: "Two",
        email: "Two@one.com",
        status: "Job Finder"
        jobTags: "Job Tag 2",
        username: "user2",
        password: "two"
    }
)

usersCollection.insert(
    {
        userID: 3,
        firstName: "Three",
        lastName: "Three",
        email: "Three@one.com",
        status: "Job Finder"
        jobTags: "Job Tag 3",
        username: "user3",
        password: "three"
    }
)

usersCollection.insert(
    {
        userID: 4,
        firstName: "Four",
        lastName: "Four",
        email: "Four@one.com",
        status: "Business"
        jobTags: "Job Tag 4",
        username: "user4",
        password: "four"
    }
)

usersCollection.insert(
    {
        userID: 5,
        firstName: "Five",
        lastName: "Five",
        email: "Five@one.com",
        status: "Business"
        jobTags: "Job Tag 5",
        username: "user5",
        password: "five"
    }
)

usersCollection.insert(
    {
        userID: 6,
        firstName: "Six",
        lastName: "Six",
        email: "Six@one.com",
        status: "Business"
        jobTags: "Job Tag 6",
        username: "user6",
        password: "six"
    }
)

