var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
		'<html>'+
		'    <script src="[musicCache].json" type="text/javascript"></script>'+
		'	 <button onclick="DownloadJSON2CSV([Nom_de_la_variable_Définie_Dans_le_JSON].d);"</button><head>'+
		'    <meta charset="utf-8" />'+
		'    <title>Ma page Node.js !</title>'+
		'    </head>'+ 
		'    <body>'+
		'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
		'    </body>'+
		'</html>');
    res.end();
});
server.listen(8080);
