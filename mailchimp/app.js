//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const https = require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.post("/",function (req, res){
    const first = req.body.first;
    const last = req.body.last;
    const email = req.body.mail;
    const data = {

        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: first,
                    LNAME: last,
                }
            }
        ]
    }
    const jsondata= JSON.stringify(data);
    const url = "https://us10.api.mailchimp.com/3.0/lists/226f501baa";
    const options = {
        method: "POST",
        auth: "govind:efbb0b4d2b557b00758655a8be6e53df-us10",
    }
    const request= https.request(url,options,function(response){
      response.on("data",function(data){
          console.log(JSON.parse(data));
      })
    })

    request.write(jsondata);
    request.end();

});


app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
})



















app.listen(3000,function(){
    console.log("Server is up");
});

//efbb0b4d2b557b00758655a8be6e53df-us10
//226f501baa
