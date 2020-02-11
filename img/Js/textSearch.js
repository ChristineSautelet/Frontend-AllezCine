
function textCheck(txt){
	let chk = txt.search ('Linkin Park');
	console.log(txt);
	console.log(chk);
	if (chk == -1) {
		console.log('no Linkin Park here')
	}
	else {
		console.log('Linkin Park is Here')
	}
}

let textTest = "Hello world, i'm Rabbit";
let textTest20 = 'Linkin Park';
let textTest30 = "JayZ, Linkin Park and Marylin Monson";

textCheck(textTest);
textCheck(textTest20);
textCheck(textTest30);