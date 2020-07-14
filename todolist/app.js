//jshint esversion:

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.set('view engine', 'ejs');


app.get("/", function (req, res){
    var today = new Date();
    var currentday = today.getDay();
    var day = "";
switch (currentday){
    case 0: day = "Sunday";
    break;
    case 1: day = "Monday";
    break;
    case 2: day = "Tuesday";
    break;
    case 3: day = "Wednesday";
    break;
    case 4: day = "Thursday";
    break;
    case 5: day = "Friday";
    break;
    case 6: day = "Saturday";
    break;
    default: console.log("Error");
}

        res.render("index",{kindofday: day});
})

app.listen("3000", function(){
    console.log("Server running");
});
