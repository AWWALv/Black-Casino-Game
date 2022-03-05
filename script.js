
//black casino logic
let cards = []
let sumOfCards = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player ={
    name : "Awwal",
    chips : 150
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ":" +" "+ player.chips


function renderGame() {
if (sumOfCards <= 20) {
message = "Do you want to draw a new card"
} else if (sumOfCards === 21){
message = "wohoo !!, you've got the blackjack"
hasBlackJack = true
}else {
message = "you are out of the game"
isAlive = false
}
messageEL.textContent = message
sumEl.textContent = "Sum:"+ " " + sumOfCards
cardsEl.textContent = "cards: " 

for (let i = 0; i < cards.length; i++ ){
    cardsEl.textContent += cards[i] + " ,"
}
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()* 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }

}

function startGame(){
    isAlive = true
    firstCard = getRandomCard() 
    secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sumOfCards = firstCard + secondCard
    renderGame()
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sumOfCards +=  card
    cards.push(card)
    renderGame()
}
}
