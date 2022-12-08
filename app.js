require("dotenv").config()

const express = require("express");
const path = require("path");
const router = require("./routes/router");
const bodyParser = require("body-parser")
const connectDb  = require("./database/db");

connectDb();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);



app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})