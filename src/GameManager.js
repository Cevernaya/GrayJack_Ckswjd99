const Dealer = require('./Player').Dealer
const User = require('./Player').User
const Deck = require('./Deck').Deck

let gameState = {
    RUNNING: 0,
    FINISHED: 1
}

class GameManager {
    constructor () {
        this.deck = new Deck(this)
        this.dealer = new Dealer(this)
        this.user = new User(this)

        this.state = gameState.RUNNING

        this.dealCards()
        this.dealCards()
    }

    dealCards() {
        if(this.state == gameState.FINISHED) {
            return
        }

        console.log("Dealing Cards...")

        this.dealer.getCard(this.deck.popCard())
        this.user.getCard(this.deck.popCard())
        if(this.user.calcTotalValue() > 21) {
            console.log("User Defeat")
            this.state = gameState.FINISHED

            let dealerGap = 21 - this.dealer.calcTotalValue()
            let userGap = 21 - this.user.calcTotalValue()
            
            console.log("Dealer Cards: ", this.dealer.printRealCard())
            console.log("Dealer Gap: ", dealerGap)
            console.log("User Cards: ", this.user.printCard())
            console.log("User Gap: ", userGap)
            return
        }

        console.log("Dealer Cards: ", this.dealer.printCard())
        console.log("User Cards: ", this.user.printCard())
    }

    finishGame() {
        if(this.state == gameState.FINISHED) {
            return
        }

        console.log("Finishing Game...")
        this.state = gameState.FINISHED

        let dealerGap = 21 - this.dealer.calcTotalValue()
        let userGap = 21 - this.user.calcTotalValue()

        console.log("Dealer Cards: ", this.dealer.printRealCard())
        console.log("Dealer Gap: ", dealerGap)
        console.log("User Cards: ", this.user.printCard())
        console.log("User Gap: ", userGap)

        if(dealerGap < 0) {
            console.log("User Win")
            return
        }

        if(dealerGap > userGap) {
            console.log("User Win")
            return
        }

        if(dealerGap < userGap) {
            console.log("User Defeat")
            return
        }

        if(dealerGap == userGap) {
            console.log("User was a Chicken!")
            return
        }
    }
}

exports.GameManager = GameManager