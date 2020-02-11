var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    if ('ObjectRequest' in params && 'Artist' in params) {
        res.write('Vous avez recherché ' + params['ObjectRequest'] + ' de ' + params['Artist']);
    }
    else {
        res.write("<!DOCTYPE html>"+
"<html>"+
"    <head>"+
"        <meta charset='utf-8' />"+
"        <title>Ma page principale !</title>"+
"    </head>"+ 
"    <body>"+
"     	<p> Bienvenue sur la page principale, si vous souhaitez connaitre les meilleures musiques d'un artiste ou simplement la list complète de ses musiques."+
"		<p> Dans localhost:8080?ObjectRequest=XXX&Artist=YYY</p>"+
"		<p> Remplacez le XXX dans ObjectRequest par list pour la liste des musiques ou ranked pour les mieux cotée seulement.</p>"+
"		<p> Ensuite, remplacez les YYY par le nom de l'artiste recherché</p>"+
"		<p> Bonne Recherche !</p>"+
"    </body>"+
"</html>");
	}
    res.end();
});
server.listen(8080);