// main.js

// Define Random Number Function
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Define divs variable as all divs inside grid container
let divs = document.querySelectorAll(".grid-container div");

// Define Randomize function
function randomize() {
    console.log(divs.length, "randomize!");

    // just the grid divs
    divs.forEach(function (div) {
        let scale = randomNumber(0.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360);

        // 50% of the time
        if (Math.random() > 0.5) {
            scale = 1; // don't affect scale
            translateX = randomNumber(0, 80);
            translateY = randomNumber(0, 80);
        }

        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });
}

// add click listeners to each word so the words are clickable
divs.forEach(function (div) {
    div.addEventListener("click", randomize);
});