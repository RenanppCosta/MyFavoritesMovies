const Movies = require("../models/Movies");

const renderPostPage = (req,res)=>{
    return res.render("form");
}

const getAllMovies = async (req, res) =>{
    try {
        const moviesList = await Movies.find().sort({_id:-1}).skip(1);
        const movieTop = await Movies.findOne().sort({_id:-1});
        return res.render("index", {moviesList, movieTop, movieDelete:null, movieUpdate:null});

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
        
            await Movies.create(movie);
            return res.redirect("/");
    
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }

const getById = async (req, res) =>{
    try {
        const moviesList = await Movies.find().sort({_id:-1}).skip(1);
        const movieTop = await Movies.findOne().sort({_id:-1});

        if(req.params.method == "delete"){
            const movieDelete = await Movies.findOne({_id: req.params.id});
            res.render("index", {moviesList, movieTop, movieDelete, movieUpdate: null});
        }else if(req.params.method == "update"){
            const movieUpdate = await Movies.findOne({_id: req.params.id});
            res.render("index", {moviesList, movieTop, movieDelete:null, movieUpdate} )
        }

        
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

const deleteMovie = async (req,res) =>{
    try {
        await Movies.deleteOne({_id: req.params.id});
        res.redirect("/");
        
        
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

const updateMovie = async (req,res) =>{
    try {
        const movie = {title: req.body.title,
        year: req.body.year,
        description: req.body.description,
        posterMovie: req.file.filename}
        
        await Movies.updateOne({_id: req.params.id}, movie);
        res.redirect("/");
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}




module.exports = {
    getAllMovies,
    createMovies,
    renderPostPage,
    getById,
    deleteMovie,
    updateMovie
}