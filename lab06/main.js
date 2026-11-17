/* Choice buttons and story viewing elements */
const iview = document.getElementById("storyView");
const icaption = document.getElementById("storyCaption");

/* Images used */
const imgPathRoot = "/lab06/assets/mafu-";
const imgPaths = ["rain.jpeg", "cloudy.jpeg",
                  "sunny.jpeg", "snow.jpeg",
                  "foggy.jpeg", "windy.jpeg"];
const imgCaptions = ["She's been soaked! It's raining!!",
                     "She's more down than usual... it's cloudy!",
                     "She's feeling pretty good... it's sunny!",
                     "We can't see her... it's foggy!",
                     "She fell over... it's windy!"];

const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=43.59531&longitude=-79.640579&current=rain,snowfall,cloud_cover,wind_speed_10m&timezone=America%2FNew_York&forecast_days=1"
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    let wind = data.current.wind_speed_10m;
    let rain = data.current.rain;
    let snow = data.current.snowfall;
    let cloud = data.current.cloud_cover;

    let bool_windy = wind >= 20;
    let bool_raining = rain > 0;
    let bool_snowing = snow > 0;
    let bool_cloudy = cloud >= 70;
    let bool_foggy = false; // TODO: implement
    
    if (bool_windy) {
        iview.src = imgPathRoot + imgPaths[5];
        icaption.textContent = imgCaptions[5];
    }
    else if (bool_raining) {
        iview.src = imgPathRoot + imgPaths[0];
        icaption.textContent = imgCaptions[0];
    }
    else if (bool_snowing) {
        iview.src = imgPathRoot + imgPaths[3];
        icaption.textContent = imgCaptions[3];
    }
    else if (bool_cloudy) {
        iview.src = imgPathRoot + imgPaths[1];
        icaption.textContent = imgCaptions[1];
    }
    else if (bool_foggy) {
        iview.src = imgPathRoot + imgPaths[4];
        icaption.textContent = imgCaptions[4];
    }
    else {
        iview.src = imgPathRoot + imgPaths[2];
        icaption.textContent = imgCaptions[2];
    }
  });
