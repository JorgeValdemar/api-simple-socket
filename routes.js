module.exports = function (app, expressWs) {
    app.get('/login', function (req, res, next) {
        require('./components/login')(req, res);
    });

    function sendAll(msg) {        
        expressWs.getWss().clients.forEach(function(client) { 
            client.send(msg); 
        });                
    }
    
    app.ws('/login', function (ws, req) {
        ws.on('message', function (msg) {
            console.log(msg);
            sendAll(msg);
        });

        ws.on('close', function () {
            ws.send('close'); 
        })
    });
    
}

