// jshint esversion:6
let cards = [];
let suits = ["Spades", "Hearts", "Dimonds", "clubs"];
let cardNumber = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let cardOutput = document.querySelector("#cards-output");


for (s in suits) {
  for (n in cardNumber ) {
    cardOutput.innerHTML = suits[s] + cardNumber[n];
  }
}