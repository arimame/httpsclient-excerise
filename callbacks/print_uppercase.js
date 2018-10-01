var getHTML = require('../step5');

function printUpperCase (html) {
  html = html.toUpperCase();
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(requestOptions, printUpperCase);