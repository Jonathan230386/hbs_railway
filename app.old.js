const http = require('http');
http.createServer((req, res) =>{
    res.writeHead(200,{'content-type': 'application/json'});
    const persona = {
        id: 1,
        nombre: 'Jonathan'
    }
    res.write(JSON.stringify(persona));
    res.end();
}).listen(3000); 