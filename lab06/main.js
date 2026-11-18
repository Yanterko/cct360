/* Choice buttons and story viewing elements */
const iview = document.getElementById("storyView");
const icaption = document.getElementById("storyCaption");
const b1 = document.getElementById("b1");
const body = document.body;

/* Images used */
const imgPathRoot = "/lab06/assets/mafu-";
const imgPaths = ["rain.jpeg", "cloudy.jpeg",
                  "sunny.jpeg", "snow.jpeg",
                  "foggy.jpeg", "windy.jpeg",
                  "error.jpeg", "unloaded.jpeg",
                  "nightclear.jpeg"];
const imgCaptions = ["She's been soaked! It's raining!!",
                     "She's more down than usual... it's cloudy!",
                     "She's feeling pretty good... it's sunny!",
                     "It's snowing... but she went for an Iced Capp for some reason?",
                     "We can't see her... it's foggy!",
                     "She fell over... it's windy!",
                     "She couldn't make it to the meteorologist!",
                     "Want to try this again?",
                     "The skies are calm tonight, like our good ol' friend Mafuyu here! :)"];
const bgColors = ["#0078df", "#696969", "#eeeeee", "#454466", "#cbaa87", "#bb88ee", "#dd4544", "#696969", "#8889cb"];

const buttonTextStart = "Get the verdict!";
const buttonTextWaiting = "Waiting for verdict";
const buttonTextEnd = "Restart";

let started = false; // True if user pressed the reveal button

const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=43.59531&longitude=-79.640579&hourly=visibility&current=rain,snowfall,cloud_cover,wind_speed_10m,is_day&timezone=America%2FNew_York&forecast_days=1"

function references() {
    window.open("/lab06/references.html", "References", "width=750, height=750, top=100, left=100, resizable=yes");
}

function getVerdict() {
  if (!started) {
    started = true;
    b1.disabled = true;
    b1.textContent = buttonTextWaiting;
    try {
        fetch(apiURL)
          .then((response) => response.json())
          .then((data) => {
            let wind = data.current.wind_speed_10m;
            let rain = data.current.rain;
            let snow = data.current.snowfall;
            let cloud = data.current.cloud_cover;
            let visibility = data.current.visibility / 1000;
        
            let bool_windy = wind >= 20;
            let bool_raining = rain > 0;
            let bool_snowing = snow > 0;
            let bool_cloudy = cloud >= 70;
            let bool_foggy = visibility <= 1;
            let bool_daytime = data.current.is_day == 1;
            
            
            if (bool_windy) {
                iview.src = imgPathRoot + imgPaths[5];
                icaption.textContent = imgCaptions[5];
                body.style.backgroundColor = bgColors[5];
            }
            else if (bool_raining) {
                iview.src = imgPathRoot + imgPaths[0];
                icaption.textContent = imgCaptions[0];
                body.style.backgroundColor = bgColors[0];
            }
            else if (bool_snowing) {
                iview.src = imgPathRoot + imgPaths[3];
                icaption.textContent = imgCaptions[3];
                body.style.backgroundColor = bgColors[3];
            }
            else if (bool_cloudy) {
                iview.src = imgPathRoot + imgPaths[1];
                icaption.textContent = imgCaptions[1];
                body.style.backgroundColor = bgColors[1];
            }
            else if (bool_foggy) {
                iview.src = imgPathRoot + imgPaths[4];
                icaption.textContent = imgCaptions[4];
                body.style.backgroundColor = bgColors[4];
            }
            else if (bool_daytime) {
                iview.src = imgPathRoot + imgPaths[2];
                icaption.textContent = imgCaptions[2];
                body.style.backgroundColor = bgColors[2];
            }
            else {
                iview.src = imgPathRoot + imgPaths[8];
                icaption.textContent = imgCaptions[8];
                body.style.backgroundColor = bgColors[8];
            }
    
            b1.textContent = buttonTextEnd;
            b1.disabled = false;
          }
        )
        .catch(error => {
            iview.src = imgPathRoot + imgPaths[6];
            icaption.textContent = imgCaptions[6] + " (Error: " + error.message + ")";
            body.style.backgroundColor = bgColors[6];
            b1.textContent = buttonTextEnd;
            b1.disabled = false;
        })
    } catch (error) {
        iview.src = imgPathRoot + imgPaths[6];
        icaption.textContent = imgCaptions[6] + " (Error: " + error.message + ")";
        body.style.backgroundColor = bgColors[6];
        b1.textContent = buttonTextEnd;
        b1.disabled = false;
    } 
    }
    
    else {
        iview.src = imgPathRoot + imgPaths[7];
        icaption.textContent = imgCaptions[7];
        body.style.backgroundColor = bgColors[7];
        b1.textContent = buttonTextStart;
        b1.disabled = false;
        started = false;
    }
  }

function testVerdict(resultId) {
    const numOfVerdicts = imgCaptions.length;
    if (resultId < 0 || resultId >= numOfVerdicts || typeof(resultId) !== 'number') {
        console.error("Can't testVerdict; resultId must be a number between 0 and " + numOfVerdicts);
    }
    else {
        iview.src = imgPathRoot + imgPaths[resultId];
        icaption.textContent = imgCaptions[resultId];
        body.style.backgroundColor = bgColors[resultId];
    }
}

function testButton(stateId) {
    if (stateId == 0) {
        b1.textContent = buttonTextStart;
        b1.disabled = false;
        started = false;
    }
    else if (stateId == 1) {
        b1.textContent = buttonTextWaiting;
        b1.disabled = true;
        started = true;
    }
    else if (stateId == 2) {
        b1.textContent = buttonTextEnd;
        b1.disabled = false;
        started = true;
    }
    else {
        console.error("Can't testButtonState; stateId must be a number between 0 and " + numOfVerdicts);
    }
}

b1.addEventListener("click", getVerdict);