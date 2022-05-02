var express = require('express');
var fs = require('fs');
var moment = require('moment')
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Body parser use JSON data

app.post('/', function(req, res) {
    var created = moment().format('YYYY-MM-DD hh:mm:ss')

    var outputFilename = './20220428.csv'; // path of the file to output
    //console.log(JSON.stringify(req.body, null, 2));
    var content = created + ","+ req.body.log+ "\r\n";
    console.log(content);
    fs.appendFile(outputFilename, content, function (err) {
      if (err) throw err;
      res.send('Saved to ' + outputFilename);
    });

});

var port = 3000;
app.listen(port);
console.log('Express started on port %d ...', port);