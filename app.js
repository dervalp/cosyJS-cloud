var express = require('express')
  , fs = require("fs")
  , conf = require("./conf")
  , http = require('http')
  , mongoose = require('mongoose')
  , path = require('path');

mongoose.connect(conf.db.cs);

var models = require("./models")(mongoose),
    middleware = require("./middlewares"),
    controllers = require("./controllers");

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

// development only
if ('development' == app.get('env')) { app.use(express.errorHandler()); }

app.get('/component/:name', middleware.component.validate, controllers.component.get);
app.put('/component', middleware.component.package, controllers.component.put);

app.get('/package/:name', middleware.package.validate, controllers.package.get);
app.put('/package', middleware.package.package, controllers.package.put);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
