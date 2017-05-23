var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test job lists result', function () {
//	this.timeout(15000);

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:3000")
			.get("/api/jobs")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
				expect(res).to.be.json;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return an array object with at least one object', function (){
		expect(response).to.have.status(200);
        expect(response.body).to.be.an.object;
		expect(response.body).to.have.length.above(0);
		expect(response).to.have.headers;
    });
    
	it('The first entry in the array has known properties', function(){
       // console.log(requestResult[0]);
	    expect(requestResult[0]).to.have.all.keys(['_id','city','description','jobID','salary','title','availability','companyName','__v' ,'businessID', 'phoneNo','startDate','endDate']);
		expect(response.body).to.not.be.a.string;
	});

	it('The elements in the array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
               //console.log(response.body[0]);
				for (var i = 0; i < body.length; i++) {
					expect(body[0]).to.have.property('jobID').that.is.a('number');
					expect(body[0]).to.have.property('title').that.is.a('string');
					expect(body[0]).to.have.property('description').that.is.a('string');
					expect(body[0]).to.have.property('companyName').that.is.a('string');
					expect(body[0]).to.have.property('city').that.is.a('string');
					expect(body[0]).to.have.property('salary').that.is.a('string');
					expect(body[0]).to.have.property('availability').that.is.a('boolean');
					expect(body[0]).to.have.property('__v').that.is.a('number');
                    expect(body[0]).to.have.property('businessID').that.is.a('number');
                    expect(body[0]).to.have.property('phoneNo').that.is.a('string');
                    expect(body[0]).to.have.property('startDate').that.is.a('string');
                    expect(body[0]).to.have.property('endDate').that.is.a('string');
				}
				return true;
			});
	});	
	
});

describe('Test retrieve job where jobID=6000 result', function () {

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:3000")
			.get("/api/jobs/0")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
				expect(res).to.be.json;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return a object', function (){
		expect(response).to.have.status(200);
        expect(response.body).to.be.an.object;
		expect(response).to.have.headers;
    });
    
	it('The first entry in the array has known properties', function(){
	    expect(requestResult).to.have.all.keys(['_id','city','description','jobID','salary','title','availability','companyName','businessID','__v','endDate','phoneNo','startDate']);
		expect(response.body).to.not.be.a.string;
	});

	it('The elements in the array have the expecte properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				
					expect(body).to.have.property('jobID').that.is.a('number');
					expect(body).to.have.property('title').that.is.a('string');
					expect(body).to.have.property('description').that.is.a('string');
					expect(body).to.have.property('companyName').that.is.a('string');
					expect(body).to.have.property('city').that.is.a('string');
					expect(body).to.have.property('salary').that.is.a('string');
					expect(body).to.have.property('availability').that.is.a('boolean');
					expect(body).to.have.property('businessID').that.is.a('number');
					expect(body).to.have.property('endDate').that.is.a('string');
					expect(body).to.have.property('startDate').that.is.a('string');
					expect(body).to.have.property('phoneNo').that.is.a('string');
					
				
				return true;
			});
	});	
	
});

// describe('Test wUsers lists result', function () {
// //	this.timeout(15000);

// 	var requestResult;
// 	var response;
		 
//     before(function (done) {
//         chai.request("http://localhost:3000")
// 			.get("/api/users/wUsers")
// 			.end(function (err, res) {
// 				requestResult = res.body;
// 				response = res;
//                 expect(err).to.be.null;
// 				expect(res).to.be.json;
//                 expect(res).to.have.status(200);
// 				done();
// 			});
//         });
    
//     it('Should return an array object with at least one object', function (){
// 		expect(response).to.have.status(200);
//         expect(response.body).to.be.an.object;
// 		expect(response.body).to.have.length.above(0);
// 		expect(response).to.have.headers;
//     });
    
// 	it('The first entry in the array has known properties', function(){
// 	    expect(requestResult[0]).to.have.all.keys(['_id','city','description','jobID','salary','title','availability','companyName','__v' ,'businessID', 'phoneNo','startDate','endDate']);
// 		expect(response.body).to.not.be.a.string;
// 	});

// 	it('The elements in the array have the expected properties', function(){
// 		expect(response.body).to.satisfy(
// 			function (body) {
// 				for (var i = 0; i < body.length; i++) {
// 					expect(body[0]).to.have.property('businessID').that.is.a('number');
// 					expect(body[0]).to.have.property('firestName').that.is.a('string');
// 					expect(body[0]).to.have.property('lastName').that.is.a('string');
// 					expect(body[0]).to.have.property('email').that.is.a('string');
// 					expect(body[0]).to.have.property('address').that.is.a('string');
// 					expect(body[0]).to.have.property('zipcode').that.is.a('string');
// 					expect(body[0]).to.have.property('jobTags').that.is.a('string');
// 					expect(body[0]).to.have.property('__v').that.is.a('number');
//                     expect(body[0]).to.have.property('companyName').that.is.a('string');
//                     expect(body[0]).to.have.property('description').that.is.a('string');
//                     expect(body[0]).to.have.property('companyLicenseNo').that.is.a('string');
//                     expect(body[0]).to.have.property('username').that.is.a('string');
//                     expect(body[0]).to.have.property('password').that.is.a('string');
//                     expect(body[0]).to.have.property('pictureID').that.is.a('number');
					
// 				}
// 				return true;
// 			});
// 	});	
	
// });

// describe('Test post result', function () {
// //	this.timeout(15000);

// 	var requestResult;
// 	var response;
		 
//     before(function (done) {
// 		let newJob = {
// 			jobI: 999,
//             title: "testing",
//             description: "testing",
//             companyName: "test company",
//             city: "testy",
//             salary: "123",
//             availability: true,
// 		}
//         chai.request("http://localhost:3000")
// 			.post("/api/jobs")
// 			.send(newJob)
// 			.end(function (err, res) {
// 				requestResult = res.body;
// 				response = res;
                
// 				done();
// 			});
//         });
    
       
// 	it('res do not have error with status 200', function(){
// 	   	expect(err).to.be.null;
//     	expect(res).to.have.status(200);
// 	});

	
	
// });