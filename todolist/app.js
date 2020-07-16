//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
var item= "";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.post("/", function (req,res){
     item = req.body.newitem;
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

        res.render("index",{kindofday: day, newlistitem: item});
})

app.listen("3000", function(){
    console.log("Server running");
});
