const mongoose = require("mongoose");

const connectDb = ()=>{
    mongoose.connect(
        "mongodb+srv://root:renan2012nha@cluster0.leltam0.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> console.log("MongoDB Conectado"))
    .catch((err)=> console.log(err));
}

module.exports = connectDb;