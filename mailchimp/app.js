//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.get("/", function(req,res){
    res.send("Working");
})



















app.listen(3000,function(){
    console.log("Server is up");
});
