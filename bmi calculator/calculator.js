//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded(
    { extended: true }
));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/bmicalc.html");
});

app.post("/", function(req, res){
    var wt = Number(req.body.w);
    var ht = Number(req.body.h);
    var hh = ht*ht;
    var bmi = wt/hh;
    res.send("Your BMI is "+ bmi);
})


app.listen(3000, function(){
    console.log("Server started");
});