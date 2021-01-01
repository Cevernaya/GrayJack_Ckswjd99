class Player {
    constructor (manager) {
        this.manager = manager
        this.cards = new Array()
    }

    getCard(card) {
        this.cards.push(card)
    }

    printCard() {
        let s = ""
        this.cards.map(c => { s += c.printAsString(); s += " " })
        return s
    }

    calcTotalValue() {
        let result = 0
        for(let i=0; i<this.cards.length; i++) {
            result += this.cards[i].value
        }
        return result
    }
}

class Dealer extends Player {
    constructor (manager) {
        super(manager)
    }

    printCard() {
        let s = ""
        for(let i=0; i<this.cards.length; i++) {
            if(i == 0) {
                s += "@@"
            }
            else {
                s += this.cards[i].printAsString()
            }
            s += " "
        }
        return s
    }

    printRealCard() {
        let s = ""
        this.cards.map(c => { s += c.printAsString(); s += " " })
        return s
    }   
}

class User extends Player {
    constructor (manager) {
        super(manager)
    }

    turnGo () {
        this.manager.dealCards()
    }

    turnStop () {
        this.manager.finishGame()
    }
}

exports.Dealer = Dealer
exports.User = User