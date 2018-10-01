var https = require("https");

function getHTML (options, callback) {

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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
