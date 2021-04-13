//Configure Express and require important dependencies. 
const express = require("express"); 
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars"); 
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const app = express(); 
require("dotenv").config(); 

const path = require("path"); 

//Set up the Express App to handle data parsing. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up Express Handlebars
app.engine("handlebars", expressHandlebars({ 
    //Revert to default behavior to allow templates to access object property values.
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set("view engine", "handlebars");

//Set up port and public directory. 
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

//Configure Mongoose.
const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/quizgame-mh", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

//Require and initialize routes. 
const routes = require("./routes/html-routes.js"); 
app.use(routes); 
  
//Start server. 
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});