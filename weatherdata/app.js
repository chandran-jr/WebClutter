//jshint esversion:6


const express = require("express");
const https = require("https");
const app = express();

app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=258eb97aa8fffc50110cd85b3640dd9e";
    https.get(url,function (response){
        console.log(response.statusCode);
    response.on("data",function (data){
       const datas = JSON.parse(data);
       const weatherdata = JSON.stringify(datas);
       const temp = datas.main.temp;
       const wdesc = datas.weather[0].description;
       console.log(weatherdata);
       console.log(temp);
       console.log(wdesc);
       res.write("<h1>The temperature is "+ temp+ "Kelvin </h1>");
       res.write("<h1>The weather is "+ wdesc);
    })
    }) 
})








app.listen(3000, function(){
    console.log("server is running");
})
