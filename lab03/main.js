/* Storyline */

// Note to self: To insert a linebreak in a textContent HTML element: use \r\n
const storyline0p0 = "It's another good day with our friend Mafuyu here... ^_^\r\nDo you think she should eat this cup of instant noodles?";

// "Eat the ramen" path
const storyline1p0 = "Oh no! Mafuyu fell asleep in a random fancy Tim Hortons! I wonder what happens next....";
const storyline1p1 = "OH NO!! Mafuyu missed her bus home! Guess she has to stay overnight in that fancy Tim Hortons we found...";

// "Don't eat the ramen"
const storyline2p0 = "Fast forward a couple hours, and Mafuyu had quite the day in Brampton! She's now getting on the bus home...";
const storyline2p1 = "Mafuyu made it home!... but she was so tired that she crashed to sleep on her bed!";

const storyImagesRoot = "img/";
const storyImages = ["gallery0.jpg", "gallery1.jpg", "gallery2.jpg"];

/* Elements */
const storyCaption = document.getElementById("storyCaption");
const storyImage = document.getElementById("storyImage");
const storyBody = document.querySelector("body");   

const g0 = document.getElementById("g0");
const g0c0 = document.getElementById("g0c0");
const g0c1 = document.getElementById("g0c1");

const g1 = document.getElementById("g1");
const g1c0 = document.getElementById("g1c0");

const g2 = document.getElementById("g2");
const g2c0 = document.getElementById("g2c0");

/* Keep track of current part */
let currentStage = 0;
let currentPart = 0;

function story0p0() {
    storyCaption.textContent = storyline0p0;
    storyImage.src = storyImagesRoot + storyImages[0];
    g0.style.visibility = "visible";
    g1.style.visibility = "hidden";
    g2.style.visibility = "hidden";
    storyBody.style.backgroundColor = "#8888CC";
}

function story1p0() {
    storyCaption.textContent = storyline1p0;
    storyImage.src = storyImagesRoot + storyImages[1];
    g0.style.visibility = "hidden";
    g1.style.visibility = "visible";
    g2.style.visibility = "hidden";
    storyBody.style.backgroundColor = "#4B4BB6";
}

function story1p1() {
    storyCaption.textContent = storyline1p1;
    storyImage.src = storyImagesRoot + storyImages[2];
    g0.style.visibility = "hidden";
    g1.style.visibility = "hidden";
    g2.style.visibility = "visible";
    storyBody.style.backgroundColor = "#7F0000";
}

function story2p0() {
    storyCaption.textContent = storyline2p0;
    storyImage.src = storyImagesRoot + storyImages[2];
    g0.style.visibility = "hidden";
    g1.style.visibility = "visible";
    g2.style.visibility = "hidden";
    storyBody.style.backgroundColor = "#BB6688";
}

function story2p1() {
    storyCaption.textContent = storyline2p1;
    storyImage.src = storyImagesRoot + storyImages[1];
    g0.style.visibility = "hidden";
    g1.style.visibility = "hidden";
    g2.style.visibility = "visible";
    storyBody.style.backgroundColor = "#4B4BB6";
}

function updatePage() {
    switch(true) {
        case (currentStage == 0):
            story0p0();
            break;
        case (currentStage == 1 && currentPart == 0):
            story1p0();
            break;
        case (currentStage == 1 && currentPart == 1):
            story1p1();
            break;
        case (currentStage == 2 && currentPart == 0):
            story2p0();
            break;
        case (currentStage == 2 && currentPart == 1):
            story2p1();
            break;
        default:
            story0p0();
            break;
    }
}

function jumpToStage1() {
    currentStage = 1;
    currentPart = 0;
    updatePage();
}

function jumpToStage2() {
    currentStage = 2;
    currentPart = 0;
    updatePage();
}

function nextPart() {
    currentPart++;
    updatePage();
}

function prevPart() {
    currentPart--;
    updatePage();
}

function backToStart() {
    currentStage = 0;
    currentPart = 0;
    updatePage();
}

g0c0.addEventListener("click", jumpToStage1);
g0c1.addEventListener("click", jumpToStage2);

g1c0.addEventListener("click", nextPart);

g2c0.addEventListener("click", backToStart);

updatePage();