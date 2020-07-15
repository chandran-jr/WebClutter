//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const https = require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/failure",function(req,res){
    res.redirect("/");
})


app.post("/",function (req, res){
    const name = req.body.name;
    const mail = req.body.mailid;
    const com = req.body.complaint;
    const data = {

        members:[
            {
                email_address: mail,
                Complaint: com,
                status: "subscribed",
                merge_fields:{
                    NAME: name,
                }
            }
        ]
    }
    const jsondata= JSON.stringify(data);
    const url = "https://usX.api.mailchimp.com/3.0/lists/apikey";
    const options = {
        method: "POST",
        auth: "govind:List key",
    }
    const request= https.request(url,options,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname + "/success.html");
        }
        else {
                    res.sendFile(__dirname + "/failure.html")
                }
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



app.listen(process.env.PORT || 3000,function(){
    console.log("Server is up");
});
