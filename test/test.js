var should = require('should');
var request = require('request');
var expect = require('chai').expect;
var util= require('util');

var baseUrl = "https://mqxfaa5k9e.execute-api.ap-southeast-2.amazonaws.com/dev/say";

describe('test api request', function() {
  it('test request', function(done) {
     request.get({ url: baseUrl + '/say' },
	     function(error,response,body){ 
		     expect(response.statusCode).to.equal(200);
	             done();
	     });

  });
});


