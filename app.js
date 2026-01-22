const WebSocket = require("ws")
const express = require("express")
const http = require("http")

const app = express()
const server = http.createServer(app)

const wss = new WebSocket.Server({ server });
app.use(express.static("public"))
const PORT = process.env.PORT || 3000

const suits = ["clubs", "diamonds", "hearts", "spades"]
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"]
let playerCount = 0


wss.on("connection", (ws) => {
    console.log("Up and running")
    ws.on("message", (data) => {
        const msg = JSON.parse(data.toString())
        if (msg.event == "userJoined") {
            playerCount += 1
            console.log(playerCount)
        }
    })


    ws.on("close", () => {
        playerCount -= 1
        console.log(playerCount)
    })
})



    // const deck = createDeck()
    // const shuffledDeck = shuffle(deck)
    // console.log(shuffledDeck)







// Initialize Deck
function createDeck() {
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

    return deck
}

// Randomly Shuffle Deck
function shuffle(deck) {
    let shuffledDeck = []
    for (i = deck.length; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        shuffledDeck.push(deck[randomIndex])
        deck.splice(randomIndex, 1)
    }

    return shuffledDeck
}


// <img src="Assets/playing-cards-master/back_dark.png" class="card" alt="Description of the image">

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})