//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
var items= ["buy food", "eat food"];
var workitems = [];

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.post("/", function (req,res){
    var item = req.body.newitem;
    if(req.body.list === "Work"){
        workitems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
    res.redirect("/");
}
    })

app.get("/work",function (req, res){
    res.render("index", {listtitle: "Work list", newlistitems: workitems});
})

app.post("/work" , function (req,res){
    let item = req.body.newitem;
    workitems.push(item);
    res.redirect("/work");
})


app.get("/", function (req, res){
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

        res.render("index",{listtitle: day, newlistitems: items});
})

app.get("/about",function(req,res){
    res.render("about");
})

app.listen("3000", function(){
    console.log("Server running");
});
