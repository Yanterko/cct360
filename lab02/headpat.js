// Headpat section
var headpatIdleImg = "img/mafuheadpat/idle.jpeg";
var headpatHoverImg = "img/mafuheadpat/headpat1.jpeg";
var headpatClickImg = "img/mafuheadpat/headpat2.jpeg";
var headpatImage = document.getElementById("mafuheadpat");
var headpatButton = document.getElementById("mafuheadpatButton");
var headpatCounter = document.getElementById("mafuheadpatCounter");
var headpatCount = 0;    // Just don't change this >:(
var currentlyHovered = false;

function headpatHover() {
    currentlyHovered = true;
    headpatImage.src = headpatHoverImg;
}

function headpatIdle() {
    if (!currentlyHovered) {
        headpatImage.src = headpatIdleImg;
    }
    
}

function headpatClick() {
    headpatCount++;
    headpatUpdate();
    headpatImage.src = headpatClickImg;
}

function headpatReset() {
    currentlyHovered = false;
    headpatImage.src = headpatHoverImg;
    setTimeout(headpatIdle, 600);
}

function headpatUpdate() {
    headpatCounter.textContent = "Headpat Counter: " + headpatCount;
}

// Binding the headpat buttons
headpatButton.onmouseenter = headpatHover;
headpatButton.onmousedown = headpatClick;
headpatButton.onmouseup = headpatHover;
headpatButton.onmouseleave = headpatReset;
headpatUpdate();