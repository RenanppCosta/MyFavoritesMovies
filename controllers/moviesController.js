const Movies = require("../models/Movies");

const renderPostPage = (req,res)=>{
    return res.render("form");
}

const getAllMovies = async (req, res) =>{
    try {
        const moviesList = await Movies.find();
        return res.render("index", {moviesList});

    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

const createMovies = async (req, res) =>{
    let movie = new Movies ({
        title: req.body.title,
        year: req.body.year,
        description: req.body.description,
        posterMovie: req.file.filename
        })

        try {
        
            movie = await Movies.create(movie);
            return res.redirect("/");
    
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }

   


module.exports = {
    getAllMovies,
    createMovies,
    renderPostPage
}