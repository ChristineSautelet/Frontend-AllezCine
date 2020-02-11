const familleTedaldiBefore = ['Rudy', 'Marilyne'];
const familleTedaldiAfter = ['Timothy', 'Rudy', 'Marilyne','Amaury'];
const familleNoël = ['Gaetan', 'Patricia'];
const currentYear = 2019
const séparation = '========================================================'

const a1 = 'lapin';
const a2 = 'chien';
const a3 = 'chat';
const a4 = 'rat';

class animalDeCompagnie {
	constructor(type, lastName,firstName, dateOfBirth, hasBeenChipped, owners, alive, age, pathImage) {
		this.type = type;
		this.lastName = lastName;
		this.firstName = firstName;
		this.dateOfBirth = dateOfBirth;
		this.hasBeenChipped = hasBeenChipped;
		this.owners = owners;
		this.alive = alive;
		this.age = age;
		this.pathImage = pathImage;
	}
	howManyOwner() {
		let nbOwners = this.owners.length();
		return nbOwners
	}
	currentAge() {
		if(this.alive){
			this.age = currentYear - this.dateOfBirth;
		}
		else {
			this.age = null;
		}
	}
	showDataAnimal(){
		if (this.age != null) {
			console.log(this.lastName + ' ' + this.firstName + ', né en ' + this.dateOfBirth + ', est un ' + this.type + ' agé désormais de ' + this.age);
		}
		else {
			console.log(this.lastName + ' ' + this.firstName + ', né en ' + this.dateOfBirth + ', est un ' + this.type + ' qui nous a quitté');
		}
		if (this.hasBeenChipped){
			if (this.owners.length > 1){
			console.log('Pucé, ses propriétaires sont : ' + this.owners);
			}
			else {
			console.log('Pucé, son ou sa propriétaire est : ' + this.owners);
			}
		}
		else {
			if (this.owners.length > 1){
			console.log('Non pucé, ses propriétaires sont : ' + this.owners);
			}
			else {
			console.log('Non pucé, son ou sa propriétaire est : ' + this.owners);
			}
		}
	}
}

//Adding datas
let picasso = new animalDeCompagnie(a3, 'TEDALDI', 'Picasso', 2009, false, familleTedaldiAfter, true);
picasso.currentAge();
let peluche = new animalDeCompagnie(a1, 'TEDALDI', 'Peluche', 2007, false, familleTedaldiAfter, false);
peluche.currentAge();
let coquine = new animalDeCompagnie(a1,'TEDALDI', 'Coquine', 2005, false, familleTedaldiAfter, false);
coquine.currentAge();
let clafoutti = new animalDeCompagnie(a3,'TEDALDI', 'Claffouti', 1990, false, familleTedaldiBefore, false);
clafoutti.currentAge();
let loco = new animalDeCompagnie(a2,'NOEL', 'Loco', 2005, false, familleNoël, false);
loco.currentAge();
let twitch  = new animalDeCompagnie(a4, 'TEDALDI', 'Twith', 2019, false, ['Amaury'], false);
twitch.currentAge();

let nosAnimaux = [picasso, peluche, coquine, clafoutti, loco];
 
twitch.showDataAnimal();

//console.log(nosAnimaux); //affiche les caractéristiques de chaques objets de type animalDeCompagnie

//nosAnimaux.owner.push('Amaury'); // !!! ça ne fonctionne pas :'(,, il faut le faire manuellement pour chaque animal



/*let nbAnimals = nosAnimaux.length;
console.log('il y a ', nbAnimals, ' animaux au total !!');*/



//console.log(nosAnimaux); //affiche les caractéristiques de chaques objets de type animalDeCompagnie

//nosAnimaux.owner.push('Amaury'); // !!! ça ne fonctionne pas :'(,, il faut le faire manuellement pour chaque animal

/*
console.log(séparation);
console.log('Oh zut on a oublié les enfants pour clafoutti!!');
console.log(séparation);
clafoutti.owners.push('Amaury', 'Timothy'); //.unshift si on les veut en début de tableau
// on rajoute Amo et Tim car ils ont rejoins la famille entre temps (l'info est gardée dans le tableau pour tout le reste de l'instance
console.log(clafoutti); 
*/

/*
SET is an unordered list.  This means that you cannot reliably retrieve specific list elements, 
as they do not have a fixed index. Instead, you can add and remove elements (duplicates are not allowed),
and check whether a set contains a certain element or not.  
Sets can come in handy for things like storing which users are online at a given time so you can check 
if they are or not.
*/

/*
On the other hand, a MAP is an ordered list of key/value pairs. 
While this sounds like an object, there are some important differences. 
For example, keys can be any value (not just strings) in maps;
you can easily find its  size, and its key/value pairs can be filtered or modified in certain circumstances.
*/