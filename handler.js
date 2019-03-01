'use strict';

var main_response = {
    "statusCode": 200,
    "headers": {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Credentials': true,
    },
    "isBase64Encoded": false
};

module.exports.hello = function(request, context, callback) {
  main_response.body = "{\"message\": \"Hello World\"}";
  callback(null, main_response);
}
