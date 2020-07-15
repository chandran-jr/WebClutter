//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.set('view engine', 'ejs');


app.get("/", function (req, res){
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

        res.render("index",{kindofday: day});
})

app.listen("3000", function(){
    console.log("Server running");
});
