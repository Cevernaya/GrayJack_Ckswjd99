const Card = require('./Card').Card
const shuffle = require('./Util').shuffle

class Deck {
    constructor (manager) {
        this.manager = manager

        let randomOrder = new Array(52)
        for(let i=0; i<52; i++){
            randomOrder[i] = i
        }
        shuffle(randomOrder)

        this.cards = randomOrder.map(ro => new Card(ro))
    }

    popCard() {
        return this.cards.pop()
    }
}

exports.Deck = Deck