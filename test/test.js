var Lab = require("lab"),    // the Lab
  server = require("../"); // require index.js

Lab.experiment("Basic HTTP Tests", function() {
    // tests
  Lab.test("GET timer /timer/{id?} should fail (at first)", function(done) {
    var options = {
      method: "GET",
      url: "/timer/1"
    };
        // server.inject lets you similate an http request
    server.inject(options, function(response) {
      Lab.expect(response.statusCode).to.equal(404);  //  Expect http response status code to be 200 ("Ok")
   // Lab.expect(response.result).to.have.length(12); // Expect result to be "Hello Timmy!" (12 chars long)
      done();                                         // done() callback is required to end the test.
    });
  });

  Lab.test("POST timer /timer should create a new timer", function(done) {
    var options = {
      method: "POST",
      url: "/timer",
      data: {author:null, text:null}
    };
        // server.inject lets you similate an http request
    server.inject(options, function(response) {
      Lab.expect(response.statusCode).to.equal(400);  //  Expect http response status code to be 200 ("Ok")
   // Lab.expect(response.result).to.have.length(12); // Expect result to be "Hello Timmy!" (12 chars long)
      done();                                         // done() callback is required to end the test.
    });
  });



});
