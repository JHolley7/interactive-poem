// main.js

// Define Random Number Function
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define divs variable as all divs inside grid container
let divs = document.querySelectorAll(".grid-container div");
