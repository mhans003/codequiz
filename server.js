//Configure Express 
const express = require("express"); 
const handlebars = require("express-handlebars"); 
const app = express(); 

require("dotenv").config(); 

const http = require("http"); 
const path = require("path"); 

const db = require("./models"); 

//Set up the Express App to handle data parsing. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up Express Handlebars. 
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//Development only
/*
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}
*/
  
//app.get('/', routes.index);
//app.get('/users', user.list);

//Require and initialize routes. 
const routes = require("./routes/html-routes.js"); 
//const { response } = require("express");
app.use(routes); 
//Include score routes
  
db.sequelize.sync().then(() => {
    http.createServer(app).listen(app.get('port'), () => {
        console.log('Express server listening on port ' + app.get('port'));
    });
});