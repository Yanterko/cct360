// Gallery section
var galleryImgRoot = "img/mafugallery";
var galleryImgList = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"];   // Array with all images in the folder contained in `mafugalleryImgRoot`.
var galleryCaptionList = ["Use the buttons below to browse the gallery. We start with Mafuyu at Chateau Frontenac in Quebec City!",
    "The two Mafulings on a skyride at the CNE!",
    "Mafuyu enjoying Niagara Falls!",
    "Mafuyu learning how to make simple circuits with a breadboard!",
    "Mafuyu and.... Saki?!",
    "Mafuyu trying really hard to be a PRESTO card (but miserably failing)!",
    "...and my collection of Mafuyu goodies... I guess this is the end now!"
]    // List of captions to use. Should be the same length as galleryCaptionList.
var galleryPrevBtn = document.getElementById("mafugalleryPrevBtn");
var galleryProgressBtn = document.getElementById("mafugalleryProgressBtn");
var galleryNextBtn = document.getElementById("mafugalleryNextBtn");
var galleryImg = document.getElementById("mafugallery");
var galleryCaption = document.getElementById("mafugalleryCaption");
var galleryCurr = 0;    // To keep track of the image that's shown from the gallery. You should probably keep this at 0

function galleryNextImg() {
    galleryCurr++;
    galleryUpdate();
}

function galleryPrevImg() {
    galleryCurr--;
    galleryUpdate();
}

function galleryUpdate() {
    galleryImg.src = galleryImgRoot + "/" + galleryImgList[galleryCurr];
    galleryProgressBtn.textContent = (galleryCurr + 1) + "/" + (galleryImgList.length);
    galleryCaption.textContent = galleryCaptionList[galleryCurr];
    if (galleryCurr >= (galleryImgList.length - 1)) {
        galleryNextBtn.disabled = true;
        galleryPrevBtn.disabled = false;
    }
    else if (galleryCurr <= 0) {
        galleryNextBtn.disabled = false;
        galleryPrevBtn.disabled = true;
    }
    else {
        galleryNextBtn.disabled = false;
        galleryPrevBtn.disabled = false;
    }
}


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

// Binding the gallery buttons
galleryPrevBtn.onclick = galleryPrevImg;
galleryNextBtn.onclick = galleryNextImg;
galleryUpdate();

// Binding the headpat buttons
headpatButton.onmouseenter = headpatHover;
headpatButton.onmousedown = headpatClick;
headpatButton.onmouseup = headpatHover;
headpatButton.onmouseleave = headpatReset;
headpatUpdate();