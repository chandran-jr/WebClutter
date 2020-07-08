//jshint esversion:6


const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
res.sendFile(__dirname+ "/index.html");
});


app.post("/", function(req, res){
    const city = req.body.city;
    const api = "258eb97aa8fffc50110cd85b3640dd9e";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=258eb97aa8fffc50110cd85b3640dd9e`;
    https.get(url,function (response){
        console.log(response.statusCode);
    response.on("data",function (data){
       const datas = JSON.parse(data);
       const weatherdata = JSON.stringify(datas);
       const temp = datas.main.temp;
       const wdesc = datas.weather[0].description;
       const icon = datas.weather[0].icon;
       const imgurl = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
       res.write("<h1>The temperature is "+ temp+ "Kelvin </h1>");
       res.write("<h1>The weather is "+ wdesc);
       res.write("<img src=" + imgurl + ">");

    })
    }) 
})


app.listen(3000, function(){
    console.log("server is running");
})
