const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlgScoreSchema = new Schema({
    name: {
        type: String
    },
    score: {
        type: Number
    }
});

//Create and export the AlgScore model.
const AlgScore = mongoose.model("AlgScore", AlgScoreSchema);

module.exports = AlgScore;