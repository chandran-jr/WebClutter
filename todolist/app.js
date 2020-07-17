//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
var items= ["buy food", "eat food"];

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.post("/", function (req,res){
    var item = req.body.newitem;
    items.push(item);
    res.redirect("/");
})



app.get("/", function (req, res){
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

        res.render("index",{kindofday: day, newlistitems: items});
})

app.listen("3000", function(){
    console.log("Server running");
});

