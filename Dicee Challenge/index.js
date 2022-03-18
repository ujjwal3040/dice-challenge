//for player1
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceimg1="dice"+randomNumber1+".png";
var randomImagesrc1="images/"+randomDiceimg1;
document.querySelectorAll("img")[0].setAttribute("src",randomImagesrc1);

//for player2
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImagesrc2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImagesrc2);

//title
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins ☃️";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins ☃️";
}else
document.querySelector("h1").innerHTML="It's a draw ✨";
