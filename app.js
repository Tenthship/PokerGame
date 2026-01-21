const suits = ["clubs", "diamonds", "hearts", "spades"]
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"]
const deck = []

suits.forEach(suit => {
    ranks.forEach(rank => {
        deck.push({
            suit: suit,
            rank: rank,
            image: `Assets/${suit}_${rank}.png`
        })
    })
})

function shuffle(deck) {
    let shuffledDeck = []
    for (i = deck.length; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        shuffledDeck.push(deck[randomIndex])
        deck.splice(randomIndex, 1)
    }

    return shuffledDeck
}


let shuffledDeck = shuffle(deck)
console.log(shuffledDeck)