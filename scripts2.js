//card objects/constructor functions go here

function Card(number, name, url) {
  this.number = number;
  this.name = name;
  this.url = url;
}

var theFool = new Card(0, 'The Fool', "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg");

var getCard = function() {
    return Math.floor(Math.random()*3);
  };

var cards = [
  {number: 0, name: "The Fool", url: "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg"},
  {number: 1, name: 'The Magician', url: "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg"},
  {number: 2, name: 'The High Priestess', url: "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg"}
];

function drawThreeFirstCard() {
  var cardNumber = getCard();
  //var cardNumber = 2;
  var cardUrl = cards[cardNumber].url;
   $("div#results-col-1").append($('<img>', {id:"", src:cardUrl, class:"img img-fluid"}));
}

function drawThreeSecondCard() {
  var cardNumber = getCard();
  var cardUrl = cards[cardNumber].url;
   $("div#results-col-2").append($('<img>', {id:"", src:cardUrl, class:"img img-fluid"}));
}

function drawThreeThirdCard() {
  var cardNumber = getCard();
  var cardUrl = cards[cardNumber].url;
   $("div#results-col-3").append($('<img>', {id:"", src:cardUrl, class:"img img-fluid"}));
}

//UI Logic
$(document).ready(function(){
  $("form#tarot-survey").submit(function(event) {
    event.preventDefault();
    $("form#tarot-survey").hide();
    $("#results-div").show();
    drawThreeFirstCard();
    drawThreeSecondCard();
    drawThreeThirdCard();
  });

});


//$('#theDiv').prepend('<img id="theImg" src="theImg.png" />')



//Order of suits/cards:
// Tarot deck:
// Major Arcana
// Wands, Cups, Swords, Pentacles
// Page Knight Queen King

//Note: Can I do a hover/floating description box???
