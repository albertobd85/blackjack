let player = {
    name: "Alberto",
    chips: 100
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "You've got Blackjack!!";
    } else {
        isAlive = false;
        message = "You lost :(";
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        console.log("Drawing a new card from the deck!");
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}