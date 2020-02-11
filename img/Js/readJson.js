var http = require('http');
const fs = require('fs');
 
var server = http.createServer(function(req, res) {   
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write("<B>Lecture d'un fichier cache de python en JSON</B>");
    var jsonData = fs.readFileSync('musicCache.json', 'utf8');
    var jsonData2 = fs.readFileSync('musicCache.json', 'utf8');
 
    JSON.parse(jsonData, (key, value) => {
        res.write('<p><B>'+key + '</B>  =  ' + value+'</p>' );
        return value; 
    });
	
 
    res.end('<!DOCTYPE html>'+
        '<html>'+
        '    <head>'+
        '        <meta charset="utf-8" />'+
        '        <title>Ma page Node.js !</title>'+
        '    </head>'+ 
        '    <body>'+
        '       <p>---------------------</p>'+
        '    </body>'+
        '</html>');
    });
 
server.listen(8888);