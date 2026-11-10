let hintBtn = document.getElementById("hintBtn");
let hintPrompt = document.getElementById("hint");
let hintText = document.getElementById("hintId");
let hintBtnSection = document.getElementById("hintBtnSection");
const gameTips = ["If you need a change of pace, try holding Space or Shift...", 
                  "If you need a distraction, try clicking the keyboard..."];
let currGameTip = 0;

let bgAudio = document.getElementById("bgAudio");
let bgVideoSrc = document.getElementById("bgVideoSrc");
let bgVideo = document.getElementById("bgVideo");
let bgVideo2 = document.getElementById("bgVideo2");

let abgkSound0 = document.getElementById("abgKeyboard1");
let abgkSound1 = document.getElementById("abgKeyboard2");
let abgkSound2 = document.getElementById("abgKeyboard3");
let abgkSound3 = document.getElementById("abgKeyboard4");
let abgkSound4 = document.getElementById("abgKeyboard5");
let abgkSound5 = document.getElementById("abgKeyboard6");
let abgkSound6 = document.getElementById("abgKeyboard7");
let abgkSound7 = document.getElementById("abgKeyboard8");
let abgkSound8 = document.getElementById("abgKeyboard9");
let abgkSound9 = document.getElementById("abgKeyboard10");

let volSlider = document.getElementById("volSlider");
let setVolButton = document.getElementById("setVolBtn");

let startBtn = document.getElementById("startBtn");

let laBody = document.getElementById("laBody");

let started = false;
let hintOnScrn = false;
let abgkClickCount = 0; // Click 20 times = secret section

function showHint() {
    if (started && !hintOnScrn && !bgVideo.hidden) {
        hintOnScrn = true;
        hintText.textContent = "Hint: " + gameTips[currGameTip];
        if (currGameTip >= gameTips.length - 1) {
            currGameTip = 0;
        }
        else {
            currGameTip++;
        }
        hintPrompt.hidden = false;
        setTimeout(hideHint, 3000);
    }
}

function hideHint() {
    hintPrompt.hidden = true;
    hintOnScrn = false;
}

function start() {
    started = true;
    bgVideo.play();
    bgAudio.play();
    startBtn.hidden = true;
    hintPrompt.hidden = true;
    hintBtnSection.hidden = false;

}

function mafuyu() {
    bgVideo.pause();
    bgAudio.pause();
    bgVideo.hidden = true;
    bgVideo2.hidden = false;
    bgVideo2.play();
    hintBtnSection.hidden = true;
    setTimeout(mafuyu2, 10700);
}

function mafuyu2() {
    bgVideo2.hidden = true;
    bgVideo.hidden = false;
    hintBtnSection.hidden = false;
    bgVideo.play();
    setTimeout(function() {bgAudio.play();}, 300);
}

function abgkeyboard(mX, mY) {
    let sPick = Math.floor(Math.random() * 10);
    console.log(sPick);
    if (mX >= 301 && mX <= 1387 && mY >= 393 && mY <= 868 && started) {
        switch(sPick) {
            case 0: 
                abgkSound0.play();
                break;
            case 1: 
                abgkSound1.play();
                break;
            case 2: 
                abgkSound2.play();
                break;
            case 3: 
                abgkSound3.play();
                break;
            case 4: 
                abgkSound4.play();
                break;
            case 5: 
                abgkSound5.play();
                break;
            case 6: 
                abgkSound6.play();
                break;
            case 7: 
                abgkSound7.play();
                break;
            case 8: 
                abgkSound8.play();
                break;
            case 9: 
                abgkSound9.play();
                break;
            default:
                abgkSound0.play();
        }
    }
    
}

function setVol() {
    let vol = volSlider.value / 100
    bgAudio.volume = vol;
    bgVideo.volume = vol;
    bgVideo2.volume = vol;
    abgkSound0.volume = vol;
    abgkSound1.volume = vol;
    abgkSound2.volume = vol;
    abgkSound3.volume = vol;
    abgkSound4.volume = vol;
    abgkSound5.volume = vol;
    abgkSound6.volume = vol;
    abgkSound7.volume = vol;
    abgkSound8.volume = vol;
    abgkSound9.volume = vol;
}

function speedUp() {
    if (!bgVideo.hidden) {
        bgVideo.playbackRate = 4.0;
        bgAudio.playbackRate = 4.0;
    }
}

function speedRegular() {
    bgVideo.playbackRate = 1.0;
    bgAudio.playbackRate = 1.0;
}

function speedDown() {
    if (!bgVideo.hidden) {
        bgVideo.playbackRate = 0.25;
        bgAudio.playbackRate = 0.25;
    }
}

hintBtn.addEventListener("click", showHint);
startBtn.addEventListener("click", start);
setVolButton.addEventListener("click", setVol);

bgVideo.onclick = function(event) {
    let mX = event.offsetX;
    let mY = event.offsetY;
    abgkeyboard(mX, mY);
    if (abgkClickCount == 20) {
        mafuyu();
        speedRegular();
        abgkClickCount = 0;
    }
    else {
        abgkClickCount++;
    }
}

laBody.addEventListener("keyDown", (e) => {
    console.log(e.key);
});