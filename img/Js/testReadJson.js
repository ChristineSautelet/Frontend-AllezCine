const http = require('http');
const fs = require('fs');
const banana = ['toBeDumped']
const lookingFor = 'LINKIN PARK'

var server = http.createServer(function(req, res) {   
    fs.readFileSync("testReadJsonPage2.html", function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
		//res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8<br />'});
		// res.write("<B>Lecture d'un fichier cache de python en JSON</B><br />");
		var jsonData = fs.readFileSync('musicCacheTest.json', 'utf8');
		var jsonDataRating = fs.readFileSync('ratingCacheTest.json', 'utf8');
		//temporary file to stock our data
		arrayToDump = [banana];
			
		class songsObj {
			constructor (title, artist, path, rating) {
				this.title = title;
				this.artist = artist;
				this.path = path;
				this.rating = rating;
			}
		}

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
			if (value != -1){
				music.rating[i] = value;
			}
			else {
				music.rating[i] = null;
			}
			i ++;	
		});

		//Deleting the unwanted blanc at the end 
		music.path.pop();
		arrayToDump.pop();
		music.rating.pop();

		//Number of songs
		res.write('le nombre de chansons est '+ music.path.length +'<br />');

		for (let i in arrayToDump){
			let splittedKeys = arrayToDump[i].split(' - ');
			music.title[i] = splittedKeys[1];
			music.artist[i] = splittedKeys[0];
		}

		//Showing the infos we got
		i = 0;
		for (i in music.title) {
			res.write ('La musique ' + music.title[i] + ' de ' + music.artist[i] + ' peut etre retrouvee en ' + music.path[i] + ' avec une cote de '+ music.rating[i]+'<br />');
		}

		// Showing songs by artist
		i = 0;
		cpt = 0;
		res.write('<B>'+ lookingFor + ' a fait : </B><br />');
		for (i in music.artist) {
			let check = music.artist[i].search(lookingFor);
			if (check != -1){
				cpt ++;
				res.write(cpt + '. ' + music.title[i]+'<br />');
			}
		}
		if (cpt == 0) {
			res.write("Erreur, cet artiste n'existe pas ou est mal orthographie <br />");
		}
	});
});
server.listen(8080);