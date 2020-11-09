//Configure Express and require important dependencies. 
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

//Set up port and public directory. 
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

//Require and initialize routes. 
const routes = require("./routes/html-routes.js"); 
app.use(routes); 
  
//Sync database and start server. 
db.sequelize.sync().then(() => {
    http.createServer(app).listen(app.get('port'), () => {
        console.log('Express server listening on port ' + app.get('port'));
    });
});