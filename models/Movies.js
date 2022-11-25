const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    year:{
        type: Number,
        min: 1900,
        max: new Date().getFullYear(),
        require: true
    },
    posterMovie:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
})

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;