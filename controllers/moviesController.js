const Movies = require("../models/Movies");

const renderPostPage = (req,res)=>{
    return res.render("form");
}

const getAllMovies = async (req, res) =>{
    try {
        const moviesList = await Movies.find().sort({_id:-1}).skip(1);
        const movieTop = await Movies.findOne().sort({_id:-1});
        return res.render("index", {moviesList, movieTop});

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

const getById = async (req, res) =>{
    try {
        const { id } = req.params;

        const movie = await Movies.findById(id);

        if(!movie){
            return res.status(404).send({message: err.message});
        }

        return res.render("index", {movie});
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

const deleteMovie = async (req,res) =>{
    const {id} = req.params;

    try {
        
        
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}




module.exports = {
    getAllMovies,
    createMovies,
    renderPostPage,
    getById,
    deleteMovie
}