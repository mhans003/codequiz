//const path = require("path"); 
const express = require("express"); 

const router = express.Router(); 

//Require models
const Score = require("../models/score");
const AlgScore = require("../models/algScore");

router.get("/", async function(request, response) {
    const scores = await Score.find({}, {"name": 1, "score": 1, "_id": 0});

    //Sort the scores array by score from greatest to least. 
    scores.sort(function(a,b) {
        return b.score - a.score; 
    }); 

    //Render the main page with the retrieved scores. 
    response.render("index", { scores:scores });  
}); 

router.get("/algorithms", async function(request, response) {
    const scores = await AlgScore.find({}, {"name": 1, "score": 1, "_id": 0});

    //Sort the scores array by score from greatest to least. 
    scores.sort(function(a,b) {
        return b.score - a.score; 
    }); 

    //Render the main page with the retrieved scores. 
    response.render("alg_index", { scores:scores });    
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