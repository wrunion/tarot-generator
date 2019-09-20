//Business logic

var suit;
var cardNumber;
var majorArcana = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Justice', 'The Hermit', 'Wheel of Fortune', 'Strength', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'];

var getSuit = function() {
    suit = Math.floor(Math.random()*6);

    switch(suit) {
        case 0:
        case 1:
            suit = "major arcana";
            return suit;
            break;
        case 2:
        suit = "Wands";
        return suit;
        break;
        case 3:
            suit = "Pentacles";
            return suit;
            break;
        case 4:
            suit = "Swords";
            return suit;
            break;
        case 5:
            suit = "Cups";
            return suit;
            break;
        default: suit = "major arcana";
        return suit;
        break;
    }

};

var getCard = function() {
    if (suit === "major arcana") {
        cardNumber = Math.floor(Math.random() * 22);
        return cardNumber;
    } else {
        cardNumber = Math.floor(Math.random() * 15);
        switch(cardNumber) {
            case 11:
                cardNumber = "Page";
                break;
            case 12:
                cardNumber = "Knight";
                break;
            case 13:
                cardNumber = "Queen";
                break;
            case 14:
                cardNumber = "King";
                break;
        }
        return cardNumber;
    }
}

function displayCard() {
  $("#results-div").show();
    if (suit === "major arcana") {
        var card = majorArcana[cardNumber];
        $("p#displayCard").append(`Your card is ${card}. Thanks for playing!`);
        console.log(`Your card is ${card}. Thanks for playing!`);
    } else {
        console.log(`Your card is the ${cardNumber} of ${suit}. Thanks for playing!`);
        $("p#displayCard").append(`Your card is ${cardNumber} of ${suit}. Thanks for playing!`);
    }

}

//UI logic

$(document).ready(function() {
  $("form#tarot-survey").submit(function(event) {
    event.preventDefault();
    $("form#tarot-survey").hide();
    getSuit();
    getCard();
    displayCard();


  });
});

//Once the user presses the button or submits the form, run these:
// getSuit();
// getCard();
// displayCard();
