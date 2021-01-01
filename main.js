const GameManager = require('./GameManager.js').GameManager
let manager = new GameManager()

const server = require("./Server").createServer(manager)
server.listen(8888)
