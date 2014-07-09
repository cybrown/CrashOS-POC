var fs = require('fs');

var express = require('express');

var server = express();

var apps = fs.readdirSync(__dirname + '/apps');

server.use('/', express.static(__dirname + '/../public/'));

apps.forEach(function (appName) {
    var app = require(__dirname + '/apps/' + appName + '/server');
    var expressApp = express();
    app(expressApp);
    server.use('/apps/' + appName, expressApp);
});

server.listen(3000, function () {
    console.log('Listening...');
});
