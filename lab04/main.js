/* Choice buttons and story viewing elements */
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const iview = document.getElementById("storyView");
const icaption = document.getElementById("storyCaption");

/* 
   Pathways for the storyline..
   0 = Mafuyu eats ramen
   1 = Mafuyu goes to school
   2 = Mafuyu goes to a concert
*/
let path = 0;
let currPos = 0;

/* Images used */
const imgPathRoot = "/lab04/assets/";
const imgPaths = [["mafu1-1.jpg", "mafu1-2.jpg", "mafu1-3.jpg"],
                  ["mafu2-1.jpg", "mafu2-2.jpg", "mafu2-2.jpg"],
                  ["mafu3-1.jpg", "mafu3-2.jpg", "mafu3-3.jpg"]];
const imgCaptions = [["Mafuyu found some more ramen in the house. Should she eat it?",
                      "She thought it was pretty good, although she can't taste it...",
                      "She got tired eating that ramen, so she went to bed early..."],
                    ["Well, now she's bored. What should she do instead?",
                     "She found Kanade at the school somehow... that's pretty cool!!",
                     "...However, she didn't end up studying like she wanted to... XD"],
                    ["She got to see beabadoobee live on stage... Bea's playing the song Apple Cider!",
                     "Well, that was fun... and she got a poster! :D",
                     "She's super tired, so she goes to sleep in a TTC subway transfer machine. I don't think I'll ever know why she even chose a place like that in the first place."]];

function b1Change() {
    if (currPos == 2) {
        path = 0;
        currPos = 0;
    }
    else {
        currPos++;
    }
    updateStory();
}

function b2Change() {
    if (path == 0 && currPos == 0) {
        path = 1;
    }
    else if (path == 1 && currPos == 0) {
        path = 2;
    }
    updateStory();
}

function updateStory() {
    iview.src = imgPathRoot + imgPaths[path][currPos];
    icaption.textContent = imgCaptions[path][currPos];
    // eat ramen choice
    if (path == 0 && currPos == 0) {
        b1.hidden = false;
        b2.hidden = false;
        b1.textContent = "Yes";
        b2.textContent = "No";
    }
    else if (path == 1 && currPos == 0) {
        b1.hidden = false;
        b2.hidden = false;
        b1.textContent = "Go study at school";
        b2.textContent = "Go to a concert";
    }
    else if (currPos == 2) {
        b1.hidden = false;
        b2.hidden = true;
        b1.textContent = "THE END! Click to return to start";
    }
    else {
        b1.hidden = false;
        b2.hidden = true;
        b1.textContent = "Next";
    }
}

updateStory();
b1.addEventListener("click", b1Change);
b2.addEventListener("click", b2Change);