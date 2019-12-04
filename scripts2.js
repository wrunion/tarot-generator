//An array of all possible cards as objects

//Order of suits/cards:
// Major Arcana
// Wands, Cups, Swords, Pentacles
// Page Knight Queen King

const masterDeck = [
  {number: 0, name: "The Fool", url: "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg"},
  {number: 1, name: 'The Magician', url: "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg"},
  {number: 2, name: 'The High Priestess', url: "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg"},
  {number:3, name: "The Empress", url: "https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg"},
  {number: 4, name: "The Emperor", url: "https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg"},
  {number: 5, name: 'The Hierophant', url: "https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg"},
  {number: 6, name: 'The Lovers', url:"https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg"},
  {number: 7, name: 'The Chariot', url: "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg"},
  {number:8, name: 'Strength', url:"https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg"},
  {number:9, name: 'The Hermit', url:"https://upload.wikimedia.org/wikipedia/en/4/4d/RWS_Tarot_09_Hermit.jpg"},
  {number: 10, name:'Wheel of Fortune', url:"https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg"},
  {number: 11, name: 'Justice', url:"https://upload.wikimedia.org/wikipedia/en/e/e0/RWS_Tarot_11_Justice.jpg"},
  {number: 12, name:'The Hanged Man', url:"https://upload.wikimedia.org/wikipedia/en/2/2b/RWS_Tarot_12_Hanged_Man.jpg"},
  {number: 13, name: 'Death', url:"https://upload.wikimedia.org/wikipedia/en/d/d7/RWS_Tarot_13_Death.jpg"},
  {number: 14, name: 'Temperance', url: "https://upload.wikimedia.org/wikipedia/en/f/f8/RWS_Tarot_14_Temperance.jpg"},
  {number:15, name: 'The Devil', url: "https://upload.wikimedia.org/wikipedia/en/5/55/RWS_Tarot_15_Devil.jpg"},
  {number:16, name:'The Tower', url:"https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg"},
  {number: 17, name:'The Star', url:"https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_17_Star.jpg"},
  {number: 18, name: 'The Moon', url:"https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg"},
  {number: 19, name: 'The Sun', url:"https://upload.wikimedia.org/wikipedia/en/thumb/1/17/RWS_Tarot_19_Sun.jpg/340px-RWS_Tarot_19_Sun.jpg"},
  {number: 20, name: 'Judgement', url:"https://upload.wikimedia.org/wikipedia/en/d/dd/RWS_Tarot_20_Judgement.jpg"},
  {number: 21, name: 'The World', url:"https://upload.wikimedia.org/wikipedia/en/f/ff/RWS_Tarot_21_World.jpg"},
  {number:22, name: 'Ace of Wands', url:"https://upload.wikimedia.org/wikipedia/en/1/11/Wands01.jpg" },
  {number: 23, name: 'Two of Wands', url:"https://upload.wikimedia.org/wikipedia/en/0/0f/Wands02.jpg"},
  {number:24, name:'Three of Wands', url:"https://upload.wikimedia.org/wikipedia/en/f/ff/Wands03.jpg"},
  {number: 25, name: 'Four of Wands', url:"https://upload.wikimedia.org/wikipedia/en/a/a4/Wands04.jpg"},
  {number: 26, name: 'Five of Wands', url:"https://upload.wikimedia.org/wikipedia/en/9/9d/Wands05.jpg"},
  {number: 27, name:'Six of Wands', url:"https://upload.wikimedia.org/wikipedia/en/3/3b/Wands06.jpg"},
  {number: 28, name: 'Seven of Wands', url:"https://upload.wikimedia.org/wikipedia/en/e/e4/Wands07.jpg"},
  {number: 29, name: 'Eight of Wands', url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Wands08.jpg"},
  {number:20, name: 'Nine of Wands', url:"https://upload.wikimedia.org/wikipedia/en/e/e7/Wands09.jpg"},
  {number: 21, name:'Ten of Wands', url:"https://upload.wikimedia.org/wikipedia/en/archive/0/0b/20080506220911%21Wands10.jpg"},
  {number:22, name:'Page of Wands', url:"https://upload.wikimedia.org/wikipedia/en/6/6a/Wands11.jpg"},
  {number:23, name:'Knight of Wands', url:"https://upload.wikimedia.org/wikipedia/en/1/16/Wands12.jpg"},
  {number:24, name:'Queen of Wands', url:"https://upload.wikimedia.org/wikipedia/en/0/0d/Wands13.jpg"},
  {number:25, name:'King of Wands', url:"https://upload.wikimedia.org/wikipedia/en/c/ce/Wands14.jpg"},
  {number: 26, name: 'Ace of Cups', url:"https://upload.wikimedia.org/wikipedia/en/3/36/Cups01.jpg"},
  {number: 26, name: 'Two of Cups', url:"https://upload.wikimedia.org/wikipedia/en/f/f8/Cups02.jpg"},
  {number: 27, name: 'Three of Cups', url:"https://upload.wikimedia.org/wikipedia/en/7/7a/Cups03.jpg"},
  {number: 28, name:'Four of Cups', url:"https://upload.wikimedia.org/wikipedia/en/3/35/Cups04.jpg"},
  {number: 29, name: 'Five of Cups', url:"https://upload.wikimedia.org/wikipedia/en/d/d7/Cups05.jpg"},
  {number: 30, name: 'Six of Cups', url:"https://upload.wikimedia.org/wikipedia/en/1/17/Cups06.jpg"},
  {number: 31, name: 'Seven of Cups', url:"https://upload.wikimedia.org/wikipedia/en/a/ae/Cups07.jpg"},
  {number: 32, name:'Eight of Cups', url:"https://upload.wikimedia.org/wikipedia/en/6/60/Cups08.jpg"},
  {number: 33, name:'Nine of Cups', url:"https://upload.wikimedia.org/wikipedia/en/2/24/Cups09.jpg"},
  {number: 34, name:'Ten of Cups', url:"https://upload.wikimedia.org/wikipedia/en/8/84/Cups10.jpg"},
  {number: 35, name:'Page of Cups', url:"https://upload.wikimedia.org/wikipedia/en/a/ad/Cups11.jpg"},
  {number: 36, name:'Knight of Cups', url:"https://upload.wikimedia.org/wikipedia/en/f/fa/Cups12.jpg"},
  {number:37, name: 'Queen of Cups', url:"https://upload.wikimedia.org/wikipedia/en/6/62/Cups13.jpg"},
  {number:38, name:'King Cups', url:"https://upload.wikimedia.org/wikipedia/en/0/04/Cups14.jpg"},
  {number:39, name:'Ace of Swords', url:"https://upload.wikimedia.org/wikipedia/en/1/1a/Swords01.jpg"},
  {number:40, name:'Two of Swords', url:"https://upload.wikimedia.org/wikipedia/en/9/9e/Swords02.jpg"},
  {number:42, name:'Three of Swords', url:"https://upload.wikimedia.org/wikipedia/en/0/02/Swords03.jpg"},
  {number:43, name:'Four of Swords', url:"https://upload.wikimedia.org/wikipedia/en/b/bf/Swords04.jpg"},
  {number:44, name:'Five of Swords', url:"https://upload.wikimedia.org/wikipedia/en/2/23/Swords05.jpg"},
  {number:45, name:'Six of Swords', url:"https://upload.wikimedia.org/wikipedia/en/2/29/Swords06.jpg"},
  {number:46, name:'Seven of Swords', url:"https://upload.wikimedia.org/wikipedia/en/3/34/Swords07.jpg"},
  {number:47, name:'Eight of Swords', url:"https://upload.wikimedia.org/wikipedia/en/a/a7/Swords08.jpg"},
  {number: 48, name:'Nine of Swords', url:"https://upload.wikimedia.org/wikipedia/en/2/2f/Swords09.jpg"},
  {number:49, name:'Ten of Swords', url:"https://upload.wikimedia.org/wikipedia/en/d/d4/Swords10.jpg"},
  {number:50, name:'Page of Swords', url:"https://upload.wikimedia.org/wikipedia/en/4/4c/Swords11.jpg"},
  {number:51, name:'Knight of Swords', url:"https://upload.wikimedia.org/wikipedia/en/b/b0/Swords12.jpg"},
  {number:52, name:'Queen of Swords', url:"https://upload.wikimedia.org/wikipedia/en/d/d4/Swords13.jpg"},
  {number:53, name:'King of Swords', url:"https://upload.wikimedia.org/wikipedia/en/3/33/Swords14.jpg"}
];


//WHEN A USER PICKS A SPREAD:

function newSpread() {
  let currentDeck = [...masterDeck];
  shuffle();
  let drawnCards = [];
}

function shuffle() {
  //shuffle the deck
}

function drawTopCard() {
  let card = currentDeck.shift();
  //display card.url
  drawnCards.push(card);
}


















var getCard = function() {
    return Math.floor(Math.random()*54);
  };

//Original draw functions, altared so as not to have repeat cards:
// function drawThreeFirstCard() {
//   var cardNumber = getCard();
//   var cardUrl = cards[cardNumber].url;
//    $("div#results-col-1").append($('<img>', {id:"", src:cardUrl, class:"img img-fluid"}));
// }

var card1;
var card2;
var card3;

function drawThreeFirstCard() {
  card1 = getCard();
  var cardUrl = cards[card1].url;
   $("div#results-col-1").append($('<img>', {id:"", src:cardUrl, class:"img img-fluid"}));
}

function drawThreeSecondCard() {
  card2 = getCard();

  if (card2 === card1) {
    if (card2 <= 70) {
      card2 ++;
    }
  }

  var cardUrl = cards[card2].url;
   $("div#results-col-2").append($('<img>', {id:"", src:cardUrl, class:"img img-fluid"}));
}

function drawThreeThirdCard() {
  card3 = getCard();

  if (card3 === card1 || card3 === card2) {
    if (card3 >=1) {
      card2 --;
    }
  }

  var cardUrl = cards[card3].url;
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


//Note: Can I do a hover/floating description box???
