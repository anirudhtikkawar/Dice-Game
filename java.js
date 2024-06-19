var randomnumber = Math.floor(Math.random() * 6) + 1;

var randomimage = "dice" + randomnumber + ".png";

var randomselection = "./images/" + randomimage;

var img1 = $("img:eq(0)").attr("src", randomselection);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomimage2 = "dice" + randomnumber2 + ".png";

var randomselection2 = "./images/" + randomimage2;

var img2 = $("img:eq(1)").attr("src", randomselection2);

if (randomnumber > randomnumber2) {
  $("h1").text("Player 1 Wins!!!");
  var audio = new Audio("sounds/dice.mp3");
  audio.play();
} else if (randomnumber2 > randomnumber) {
  $("h1").text("Player 2 Wins!!!");
  var audio = new Audio("sounds/dice.mp3");
  audio.play();
} else {
  $("h1").text("Draw!!!");
}
