//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.post("/",function (req, res){
    var first = req.body.first;
    var last = req.body.last;
    var email = req.body.mail;
    console.log(first,last,email);

})
app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
})






app.listen(3000,function(){
    console.log("Server is up");
});
