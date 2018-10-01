var https = require('https');

module.exports = function getHTML (options, callback) {
    https.get(options, function (response){
    var string = " ";

  response.on("data", function (buffer) {
    var part = buffer.toString();
    string += part;

  });


  response.on('end', function() {
      callback(string);
  });

});
};