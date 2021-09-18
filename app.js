const express = require("express");
const ejs = require("ejs");

const app = express();
const http = require('http').Server(app);
const server = require('http').createServer(app);

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("/index.html")
});

app.get("/store", function(req, res){
    res.render("store.ejs");
});

http.listen(3000, function () {
    console.log("Server started on 3000");
});


  