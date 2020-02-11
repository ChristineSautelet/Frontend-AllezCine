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
	fs.readFile("testReadJsonPage2.html", function(err, data){
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
		
		else {
			res.write(data);
			
			var jsonData = fs.readFileSync('musicCache.json', 'utf8');
			var jsonDataRating = fs.readFileSync('ratingCache.json', 'utf8')
			class songsObj {
				constructor (title, artist, path, rating) {
					this.title = title;
					this.artist = artist;
					this.path = path;
					this.rating = rating;
				}
				
				//Function to show the music title, the artist, the rating and the path to acces it
				showAllData(){
					i = 0
					for (i in music.title) {
						res.write ('La musique ' + music.title[i] + ' de ' + music.artist[i] + ' peut être retrouvé en ' + music.path[i] + ' avec une cote de '+ music.rating[i]+'<br />');
					}
				}
				
				//Function to show the number of songs in total
				showNbSongs (){
					res.write('le nombre de chansons est '+ music.path.length +'<br />');
				}
				
				//Function to show songs made by an artist
				showSongByArtist(theArtist){
					i = 0;
					let cpt = 0;
					res.write('<center><B> Les musiques écrites par '+ lookingFor + ' sont : </B></center><br />');
					res.write('<table id="MaTable" class="tabcenter">');
					res.write('<th>n</th>');
					res.write('<th>Artist</th>');
					res.write('<th>Title</th>');
					res.write('<th>Rating</th></tr>');
					for (i in music.artist) {
						let check = music.artist[i].search(theArtist);
						if (check != -1){
							cpt ++;
							res.write('<tr><td>' + cpt + '.</td>');
							res.write('<td>' + music.artist[i]+ ' </td>');
							res.write('<td><a href="' + pathToTest + '"style="color:#EBD90E">' + music.title[i] + '</td>');
							if (music.rating[i] != -1) {
								res.write('<td>' + music.rating[i] + '/10</td></tr>');
							}
							else {
								res.write('<td>none </td></tr>');	
							}	
						}
					}
					if (cpt == 0) {
						res.write("Erreur, cet artiste est soit mal orthographie, soit non présent dans la liste <br />");
					}
					res.write('</table>');
				}
				cleanDatas(){
					this.path.pop();
					arrayToDump.pop();
					this.rating.pop();
				}			
			}
			
			//temporary file to stock our data
			arrayToDump = [banana];
			//adding some temp datas 
			let music = new songsObj ([banana],[banana],[banana], [banana]);
			let i = 0;
			
			//Adding data to our arrays
			JSON.parse(jsonData, (key, value) => {
				music.path[i] = value;
				arrayToDump[i] = key;
				i ++;
			});
			
			i=0;
			JSON.parse(jsonDataRating, (key,value) => {
				music.rating[i] = value;
				i ++;	
			});

			//Deleting the unwanted blanc at the end 
			music.cleanDatas();

			for (let i in arrayToDump){
				let splittedKeys = arrayToDump[i].split(' - ');
				music.title[i] = splittedKeys[1];
				music.artist[i] = splittedKeys[0];
			}
			
			//Calling the cuntion to show songs by artist
			music.showSongByArtist(lookingFor);
			
			fs.readFile("testReadJsonPage3.html", function(err, data2){
				res.write(data2);
				res.end();
			});
		}
});
});
server.listen(8080);