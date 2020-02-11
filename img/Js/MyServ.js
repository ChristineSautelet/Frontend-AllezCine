//Appel de la bibli Node.js "http" --> permet création serv http
var http = require('http');
const body = 'hi everyone';
/*
Appel de la fonction createServer contenue dans http avec pour paramêtre une fonction
Cet fonction a pour paramêtre req et res 
req --> obj contenant info demandes des visiteurs (nom de page, paramêtres, champs formulaires,...)
res --> réponse à envoyer
Cet appel est enregistré dans une variable appelée  "server"
*/
var server = http.createServer(function(req,res) {
	//envoi du code 200 qui signifie "i'm fine" au navigateur
	res.writeHead(200,{"Content-Type": "text/html"}); // utilité ????
	//res.end(body);
	res.end('<p> Ceci est du <strong> html </strong>!</p>');
});
//Mise sur écoute du serveur 8080
server.listen(8080);