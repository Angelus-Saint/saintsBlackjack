// jshint esversion:6

var cards = [];
var suits = ["spades", "hearts", "clubs", "diams"];
var numb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var randomNum = Math.floor((Math.random() * 52) );
var output = document.getElementById("cards-output");

for (s in suits) {
  var suit = suits[s][0].toUpperCase();
  var bgcolor = (suit == "S" || suit == "C") ? "black" : "red";
  for (n in numb) {
    // output.innerHTML += 

    let cardValue = (n > 9) ? 10 : parseInt(n)+1;
    let card = {
      suit: suit,
      icon: suits[s],
      bgColor: bgcolor,
      cardnum: numb[n],
      cardvalue: cardValue
    };
    cards.push(card);
  }
}

function drawCard() {
  output.innerHTML += "<span style='color:" + cards[randomNum].bgcolor + "'>&" + cards[randomNum].icon + ";" + cards[randomNum].cardnum + "</span> "; 
}

drawCard();