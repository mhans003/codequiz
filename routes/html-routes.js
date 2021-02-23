const path = require("path"); 
const express = require("express"); 

const router = express.Router(); 

//Require Score model. 
const db = require("../models"); 
const { Score } = db; 
const { AlgScore } = db;

router.get("/", function(request, response) {
    //Get all scores when the page loads in order to display high scores. 
    Score.findAll().then(scores => {

        //Sort the scores array by score from greatest to least. 
        scores.sort(function(a,b) {
            return b.dataValues.score - a.dataValues.score; 
        }); 

        //Render the main page with the retrieved scores. 
        response.render("index", { scores:scores });  
    }); 
    
}); 

router.get("/algorithms", function(request, response) {
    //Get all scores when the page loads in order to display high scores. 
    AlgScore.findAll().then(scores => {

        //Sort the scores array by score from greatest to least. 
        scores.sort(function(a,b) {
            return b.dataValues.score - a.dataValues.score; 
        }); 

        //Render the main page with the retrieved scores. 
        response.render("alg_index", { scores:scores });  
    }); 
    
}); 

router.post("/", function(request, response) {
    //Create the new score using the information sent over from the ajax call. 
    Score.create(request.body).then(result => {
        console.log(result); 
    }); 
}); 

router.post("/algorithms", function(request, response) {
    //Create the new score using the information sent over from the ajax call. 
    AlgScore.create(request.body).then(result => {
        console.log(result); 
    }); 
}); 

module.exports = router; 