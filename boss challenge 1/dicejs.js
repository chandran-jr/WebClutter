var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;


var dice1 = "dice" + randomNumber1 +".png";
var dice2 = "dice" + randomNumber2 +".png";


 var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src", dice1);

 var image2 = document.querySelectorAll("img")[1];
 image2.setAttribute("src", dice2);

 