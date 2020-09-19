var numSquares=6;
var colors= [];
var pickedCol;
var squares = document.querySelectorAll(".square");
var question= document.getElementById("coldis");
var h1= document.querySelector("h1");
var messageDisplay= document.querySelector("#message");
var resetButton= document.querySelector("#reset");
var modeButtons = document.getElementsByClassName("mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for (var i =0; i<modeButtons.length;i++)
    {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy" ? numSquares=3 : numSquares=6;
            reset();
        });
    }
}

function setUpSquares(){
    for(var i=0; i<squares.length; i++)
    {
        // Add listener
        squares[i].addEventListener("click",function(){
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedCol)
            {
                messageDisplay.textContent="Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor="transparent";
                messageDisplay.textContent="Try Again!";
            }
        });
    }
}

function reset(){
    // Rewrite text content
    resetButton.textContent = "New Colors";
    // Message set to null
    messageDisplay.textContent= "";
    // generate new colors
    colors = generateRandomColors(numSquares); 
    // pick new random color
    pickedCol = pickColor();
    // Change colorDisplay
    question.textContent= pickedCol;
    // change existing box colors
    for(var i=0; i<squares.length; i++)
    {
        if(colors[i]){
            // add colors
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    // Change header color back to transparent
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});


function changeColors(color){
    // Loop through all colors
    for (var i=0; i<squares.length ; i++){
    // Change to given col.
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make array
    var arr=[];
    // add num random colors to array
    // repeat num times
    for(var i=0; i<num;i++){
        // get random color and push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick Red from 0-255
    var r= Math.floor(Math.random()*256);
    // pick Green from 0-255
    var g= Math.floor(Math.random()*256);
    // pick Blue from 0-255
    var b= Math.floor(Math.random()*256);
    // "rgb(r, g, b)"
    return "rgb("+ r +", "+g+", "+b+")";
}