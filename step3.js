
var https = require("https");



function getAndPrintHTML (options) {

  https.get(requestOptions, function (response){
    var string = " ";

  response.on("data", function (buffer) {
    var part = buffer.toString();
    string += part;

  });


  response.on('end', function() {
      console.log('end', string);
  });

});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
