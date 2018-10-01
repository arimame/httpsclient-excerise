var getHTML = require('../step5');


function printReverse (html) {
  var split = html.split("");
  var reverse = split.reverse();
  var join = reverse.join("");
  console.log(join);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printReverse);