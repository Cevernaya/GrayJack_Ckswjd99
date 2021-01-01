const shape = {
    SPADE: 0,
    DIAMOND: 1,
    HEART: 2,
    CLOVER: 3
}

class Card {
    constructor (order) {
        this.shape = parseInt(order/13)
        this.number = order%13
        this.value = (this.number < 10) ? (this.number+1) : 10
    }

    printAsString() {
        let s = ""
        let shapes = ["♠", "◆", "♥", "♣"]
        s += shapes[this.shape]

        if(this.number == 0) {
            s += "A"
        }
        else if(this.number < 10) {
            s += (this.number + 1)
        }
        else if(this.number == 10) {
            s += "J"
        }
        else if(this.number == 11) {
            s += "Q"
        }
        else if(this.number == 12) {
            s += "K"
        }

        return s
    }
}

exports.Card = Card