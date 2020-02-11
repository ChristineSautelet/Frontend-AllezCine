const http = require('http');
const fs = require('fs');
const url = require('url');
const banana = ['toBeDumped']
const lookingFor = 'LINKIN PARK'
const pathToTest = 'Before You Start Your Day.mp3'
const querystring = require('querystring');


var server = http.createServer(function(req, res) {   
	var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);
	console.log(page);
	res.writeHead(200, {'Content-Type': 'text/html'});

//Affichage de la page d'accueil

	if (page == '/') {
		res.write("<!DOCTYPE html>"+
"<html>"+
"    <head>"+
"       <meta http-equiv='Content-Type' content='text/html;charset=utf8' />"+
"       <title> Une page D'accueil exeptionnelle !</title>"+
" 		<style>"+
"			body {	>"+
"				font-size: 15px;"+
"				background: #BFD0C8;"+
"				color : #D533FF;"+
"			}"+
"			h1 {"+
"				color : #EBD90E;"+
"				text-decoration: underline overline;"+
"			}"+
"		</style>"+
"	</head>"+ 
"	<h1> <font size = '8'><center>TimMusic</center></font><br /> </h1>	"+
"   <body>"+
"     	<center><p> Bienvenue sur la page principale, si vous souhaitez connaitre les meilleures musiques d'un artiste ou simplement la list complète de ses musiques."+
"		<p> Dans localhost:8080?ObjectRequest=XXX&Artist=YYY</p>"+
"		<p> Remplacez le XXX dans ObjectRequest par list pour la liste des musiques ou ranked pour les mieux cotée seulement.</p>"+
"		<p> Ensuite, remplacez les YYY par le nom de l'artiste recherché</p>"+
"		<p> Bonne Recherche !</p></center>"+
"    </body>"+
"</html>");	}

//Affichage des liste de musique par groupes

		else {
			res.write("<!DOCTYPE html> "+
"<html> "+
"    <head> "+
"		<meta http-equiv='Content-Type' content='text/html;charset=utf8' /> "+
"		<title>Une page magnifique évidement</title> "+
"		<style> "+
"			body { "+
"				font-size: 15px; "+
"				background: #BFD0C8; "+
"			} "+
"			h1 { "+
"				color : #EBD90E; "+
"				text-decoration: underline overline; "+
"			} "+
"			table{ "+
"				border-collapse: collapse; /* Les bordures du tableau seront collées (plus joli) */ "+
"				width: 70%; "+
"			} "+
"			table, td, th{ "+
"				font-size: 15px; "+
"				border-bottom: 1px solid grey; "+
"				color: #EBD90E; "+
"				text-align: left; "+
"			} "+
"			.tabcenter{ "+
"				margin-left:auto; "+
"				margin-right:auto; "+
"			} "+
"			tr:nth-child(odd) { "+
"				background: #06848D; "+
"			} "+
"			tr:nth-child(even) { "+
"				background: #587266; "+
"			} "+
"		</style> "+
"   <h1> <font size = '8'><center>TimMusic</center></font><br /> </h1> "+
"	<body> "+
		"		<font color = #cc33ff face = 'Comic sans MS' size = '5'> ");}
//On vérifie si l'utilisateur souhaite une liste de musique ou seulement les meilleures	
			if
