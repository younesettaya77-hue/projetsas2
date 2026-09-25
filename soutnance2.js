let prompt = require("prompt-sync")();
const candidats = [{
	cin: "AB123456",
	nom: "Boushaba",
	prenom: "Soufiane",
	partiPolitique: "Indépendant",
	age: 40,
	electeurs: []
},
{
	cin: "PA12323",
	nom: "Salhi",
	prenom: "Anas",
	partiPolitique: "pps",
	age: 26,
	electeurs: ["AB123456", "PA12323"]
},
{
	cin: "PB64723",
	nom: "Et-taya",
	prenom: "Younes",
	partiPolitique: "Pam",
	age: 40,
	electeurs: ["PB64723"]
}
];

function Ajoutercondidat() {
	let cin = prompt("veuillez entrer une cin : ");
	let nom = prompt("veuillez entrer un nom  : ");
	let prenom = prompt("veuillez entrer un prenom: ");
	let partiPolitique = prompt("veuillez entrer une parti Politique  : ");
	let age = +prompt("veuillez entrer un age  : ");
	let condidat = {
		cin: cin,
		nom: nom,
		prenom: prenom,
		partiPolitique: partiPolitique,
		age: age,
		electeurs: []
	}
	candidats.push(condidat);
}

function Ajouterplusieurs() {
	let nbr = +prompt("combien de condidats tu veux Ajouter : ");
	for (let i = 0; i < nbr; i++) {
		Ajoutercondidat();
	}
}
function Afichierliste() {
	console.log("1 : tu veux affichier les candidats d'ordre decroissant : ");
	console.log("2 : tu veux filtrer et affichier les candidat avec mem parti politique : ");
	let choix = +prompt("donner ton choix : ");
	switch (choix) {
		case 1: {
			for (let i = 0; i < candidats.length; i++) {
				for (let j = 0; j < candidats.length - i - 1; j++){
					if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
						let N = candidats[j];
						candidats[j] = candidats[j + 1];
						candidats[j + 1] = N;
					}
				}
			}
			console.log(candidats);
			break;
		}
		case 2: {
			let partpoly = prompt("donner une parti politique : ");
			let tab = [];
			for (let i = 0; i < candidats.length; i++) {
				if (candidats[i].partiPolitique === partpoly) {
					tab[tab.length] = candidats[i];
				}
			}
			console.log(tab);
			break;
		}
	}
}
function voterparcandidat(){

	}

	







