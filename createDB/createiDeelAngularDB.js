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
        jobID: 2,
        title: "Job2",
        description: "Just 2",
        companyName: "Comp 2",
        city: "City 2",
        salary: "Salary 2",
        availability: true
    }
)

jobsCollection.insert(
    {
        jobID: 3,
        title: "Job3",
        description: "Just 3",
        companyName: "Comp 3",
        city: "City 3",
        salary: "Salary 3",
        availability: true
    }
)

jobsCollection.insert(
    {
        jobID: 4,
        title: "Job4",
        description: "Just 4",
        companyName: "Comp 4",
        city: "City 4",
        salary: "Salary 4",
        availability: true
    }
)

jobsCollection.insert(
    {
        jobID: 5,
        title: "Job5",
        description: "Just 5",
        companyName: "Comp 5",
        city: "City 5",
        salary: "Salary 5",
        availability: true
    }
)

jobsCollection.insert(
    {
        jobID: 6,
        title: "Job6",
        description: "Just 6",
        companyName: "Comp 6",
        city: "City 6",
        salary: "Salary 6",
        availability: true
    }
)

usersCollection.insert(
    {
        userID: 1,
        firstName: "One",
        lastName: "One",
        email: "One@one.com",
        status: "Job Finder",
        jobTags: "Job Tag 1",
        userName: "user1",
        password: "one"
    }
)

usersCollection.insert(
    {
        userID: 2,
        firstName: "Two",
        lastName: "Two",
        email: "Two@one.com",
        status: "Job Finder",
        jobTags: "Job Tag 2",
        userName: "user2",
        password: "two"
    }
)

usersCollection.insert(
    {
        userID: 3,
        firstName: "Three",
        lastName: "Three",
        email: "Three@one.com",
        status: "Job Finder",
        jobTags: "Job Tag 3",
        userName: "user3",
        password: "three"
    }
)

usersCollection.insert(
    {
        userID: 4,
        firstName: "Four",
        lastName: "Four",
        email: "Four@one.com",
        status: "Business",
        jobTags: "Job Tag 4",
        userName: "user4",
        password: "four"
    }
)

usersCollection.insert(
    {
        userID: 5,
        firstName: "Five",
        lastName: "Five",
        email: "Five@one.com",
        status: "Business",
        jobTags: "Job Tag 5",
        userName: "user5",
        password: "five"
    }
)

usersCollection.insert(
    {
        userID: 6,
        firstName: "Six",
        lastName: "Six",
        email: "Six@one.com",
        status: "Business",
        jobTags: "Job Tag 6",
        userName: "user6",
        password: "six"
    }
)

