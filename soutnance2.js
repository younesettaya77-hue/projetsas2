let prompt = require("prompt-sync")();

const candidats = [{
	cin : "AB123456",
	nom : "Boushaba",
	prenom : "Soufiane",
	partiPolitique : "Indépendant",
	age: 40,
	electeurs: []
}];
function Ajoutercondidat(){
	let cin = prompt("veuillez entrer une cin : ");
	let nom = prompt("veuillez entrer un nom  : ");
	let prenom = prompt("veuillez entrer un prenom: ");
	let partiPolitique = prompt("veuillez entrer une parti Politique  : ");
	let age = +prompt("veuillez entrer un age  : ");
    let condidat = {	
		cin : cin ,
		nom : nom ,
		prenom : prenom ,
		partiPolitique : partiPolitique,
		age: age,
		electeurs: []
	}
	candidats.push(condidat);
}
function Ajouterplusieurs(){
	let nbr = +prompt("combien de condidats tu veux Ajouter : ");
	for(i = 0 ; i < nbr ; i++){
		Ajoutercondidat();
	}
}




