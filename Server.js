const http = require("http")
var url = require("url");

function server(manager) {
    return http.createServer(function(request, response) {
        const pn = url.parse(request.url).pathname
        if(pn == "/turnGo"){
            manager.user.turnGo()
        }
        if(pn == "/turnStop"){
            manager.user.turnStop()
        }
        response.end()
    })
}

exports.createServer = server