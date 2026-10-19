// Note to self: To insert a linebreak in a textContent HTML element: use \r\n
let storyline1p1 = "Mafuyu's enjoying her day";

// TODO: After ~3 seconds on the page, show this and the buttons to continue
let storyline1p2 = "Mafuyu's enjoying her day.... should she eat this bowl of ramen?";

// "Eat the ramen" path
let storyline2c1 = "Oh no! Mafuyu fell asleep in a random Tim Hortons! I wonder what happens next....";
let storyline3c1 = "OH NO!! Mafuyu missed her bus home! Guess she has to stay overnight in that Tim Hortons we found...";

// "Don't eat the ramen"
let storyline2c2 = "Fast forward a couple hours, and Mafuyu had quite the day! She's now getting on the bus home..."
let storyline3c2 = "Mafuyu made it home!... but she was so tired that she fell asleep on her table!"

document.getElementById("storyCaption").textContent = storyline1p1;