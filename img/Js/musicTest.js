const groupToSeek = 'LINKIN PARK';
let musicsTest = { 
	songs : [ {
		"$-CREW - andrei procurando": "E:\\My Music By Artist\\B\u00efa\\Carmin (1999)\\B\u00efa -008- Andrei procurando.mp3",
		"$-CREW - j'aurais pas d\u00fb": "E:\\_Music\\AlbumF5\\F539 - Hits Rentree (2016)\\F539-09 - $-Crew - J'aurais pas du.mp3",
		"LINKIN PARK - a light that never comes": "E:\\My Music By Artist\\Linkin Park\\RECHARGED (2013)\\Linkin Park -014- A LIGHT THAT NEVER COMES (Rick Rubin Reboot).mp3",
		"LINKIN PARK - a line in the sand": "E:\\My Music By Artist\\Linkin Park\\The Hunting Party (2014)\\Linkin Park -012- A Line In The Sand.mp3",
		"LINKIN PARK - a place for my head": "E:\\My Music By Artist\\Linkin Park\\Hybrid Theory (Bonus Track Version) (2000)\\Linkin Park -009- A Place For My Head.mp3",
		"LINKIN PARK - across the line": "E:\\My Music By Artist\\Linkin Park\\Unwanted Truth (2013)\\Linkin Park -009- Across The Line.mp3"
	} ]
}
let array = musicsTest.songs
objectLength = Object.keys(array[0]).length;
console.log(array[0]);
console.log(objectLength);
console.log(array[0]);
/*
for (let i = 0; i < objectLength; i++) {
	let temp = musicsTest[i];
	//temp = temp.split('-');
	console.log(temp);
	if (temp == groupToSeek){
		console.log(musicTest[i]);
	}
}
console.log('Hello ????');


/*
Le code suivant permet de trouver la longueur d'un objet !!!!!!
objectLength = Object.keys(musicsTest).length;
console.log(objectLength);
*/