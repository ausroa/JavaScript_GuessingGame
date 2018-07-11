var colors = generateRandomColors(6);
              
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var backColor = document.querySelector("#backColor");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var numSquares = 6;

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
        
        // figure out how many squares to show
        // pick new colors
        // pick a new pickedColor
        // update page to reflect changes
    });
}

backColor.style.backgroundColor = "steelblue";

resetButton.addEventListener("click", reset);

colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial color to squares
    squares[i].style.backgroundColor = colors[i];
    
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        
        // compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.innerHTML = "Correct!";
            backColor.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.innerHTML = "Try Again";
        }
    });
}

function changeColors(color) {
    // loop through all squares
    for(var i = 0; squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 - 255
    var r =Math.floor(Math.random() * 256);
    // pick a "green" from 0 -255
    var g =Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b =Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.innerHTML = pickedColor;
    // change h1 color to correct color
    backColor.style.backgroundColor = "steelblue";
    // reset play again to new colors
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
}
    


























              