const http = require('http');
const fs = require('fs');
const banana = ['toBeDumped']
const lookingFor = 'LINKIN PARK'

var server = http.createServer(function(req, res) {   
    fs.readFile("testReadJsonPage.html", function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.write ("<P>bbbbb</P>");
		res.write ("<P>ccccc</P>");
		
		fs.readFile("testReadJsonPage3.html", function(err, data2){
			res.write(data2);
			res.write ("<P>END</P>");
			res.end();
		});
		
	});
	
});
server.listen(8080);