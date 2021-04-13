const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    name: {
        type: String
    },
    score: {
        type: Number
    }
});

//Create and export the Score model.
const Score = mongoose.model("score", ScoreSchema);

module.exports = Score;