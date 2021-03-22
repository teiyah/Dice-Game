// Button Reload
function refreshPage(){
  window.location.reload();
}

// Player One
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".svg";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// Player Two
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".svg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If players Win or Draw
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Winner: Player 1!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Winner: Player 2!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
