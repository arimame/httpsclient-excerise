var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response){
    var string = " ";

  response.on("data", function (chunk) {
    var part = chunk.toString();
    string += part;
    console.log("this is a chunk:", chunk.toString(), "\n");
  });


  response.on('end', function() {
      console.log(string);
  });

});

}

  getAndPrintHTML();