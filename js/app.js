// jshint esversion:6

let cards = [];
let suits = ["spades", "hearts", "clubs", "diams"];
let numb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let playersCards = [];
let dealerCards = [];
let cardCount = 0;

const dealerOutput = document.querySelector("#dealer-card-output");
const playerOutput = document.querySelector("#player-card-output");
const startBtn = document.querySelector("#play-button");

for (s in suits) {
  var suit = suits[s][0].toUpperCase();
  var bgcolor = (suit == "S" || suit == "C") ? "black" : "red";
  for (n in numb) {
    //output.innerHTML += "<span style='color:" + bgcolor + "'>&" + suits[s] + ";" + numb[n] + "</span> ";
    var cardValue = (n > 9) ? 10 : parseInt(n) + 1;
    var card = {
      suit: suit,
      icon: suits[s],
      bgcolor: bgcolor,
      cardnum: numb[n],
      cardvalue: cardValue
    };
    cards.push(card);
  }
}

function startGame() {
  startBtn.addEventListener("click", function() {
    drawCard();
    shuffleDeck(cards);
    drawCard();
  });
}

function shuffleDeck(array) {
  for (var i = cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function dealCards() {
  playersCards = [];
  dealerCards = [];
  dealerOutput.innerHTML = "";
  playerOutput.innerHTML = "";

  for (let x = 0; x < 2; x++) {
    dealerCards.push(cards[cardCount]);  
    cardCount++;
    playersCards.push(cards[cardCount]);  
    cardCount++;
  }
  console.log(dealerCards);
  console.log(playersCards);
}



function drawCard() {
  dealerOutput.innerHTML += "<span style='color:" + cards[cardCount].bgcolor + "'>" + cards[0].cardnum + "&" + cards[0].icon + ";</span>  ";
}

// Function Calls
startGame();
dealCards();