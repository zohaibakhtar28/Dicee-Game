var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var text = randomnumber1.toString();
var text2 = randomnumber2.toString();
document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + text + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + text2 + ".png");
if (randomnumber1 == randomnumber2) {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
