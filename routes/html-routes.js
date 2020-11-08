const path = require("path"); 
const express = require("express"); 

const router = express.Router(); 

const db = require("../models"); 
const { Score } = db; 

router.get("/", function(request, response) {
    //response.sendFile(path.join(__dirname, "../public/index.html"));
    Score.findAll().then(scores => {

        //Sort the scores array by score from greatest to least. 
        scores.sort(function(a,b) {
            return b.dataValues.score - a.dataValues.score; 
        }); 

        console.log(scores); 
        response.render("index", { scores:scores });  
    }); 
    
}); 

router.post("/", function(request, response) {
    Score.create(request.body).then(result => {
        console.log(result); 

        
    }); 
}); 

module.exports = router; 