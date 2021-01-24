var expect  = require("chai").expect;
var request = require("request");

describe("User API", function() {
    
    describe("Get Users with Pagination", function() {
        var url = 'http://localhost:8000/api/users';
      it("returns status 200", function() {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
          });
      });
    });
  
    describe("Get user by Id", function() {
        const url='http://localhost:8000/api/user/600c724033785102f5da9d5612'
      it("returns status 200", function() {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
          });
      });
      
    });
  
  });