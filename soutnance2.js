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
	partiPolitique: "pam",
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
				for (let j = 0; j < candidats.length - i - 1; j++) {
					if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
						let N = candidats[j];
						candidats[j] = candidats[j + 1];
						candidats[j + 1] = N;
					}
				}
			}
			AFFICHAGERDESFCT(candidats);
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
			AFFICHAGERDESFCT(tab);
			break;
		}
	}
	console.log("le nomber incorrect . ");
}
function voterparcandidat() {
	let cin = prompt("doner ton cin : ");

}
function modifierinfo() {
	console.log("1 : Modifier la parti politique  ");
	console.log("2 : Modifier l'age ");
	let choix = +prompt("doner ton choix : ");
	switch (choix) {
		case 1: {
			let index = +prompt("donner l'index de l'objet tu veux modifier :");
			let partpo = prompt("veillez donner la parti politique :  ");
			for (let i = 0; i < candidats.length;i++) {
				if (index === i) {
					candidats[i].partiPolitique = partpo;
				}
			}
			AFFICHAGERDESFCT(candidats)
			break;
		};
		case 2: {
			let index = +prompt("donner l'index de l'objet tu veux modifier :");
			let age = +prompt("veillez donner l'age : ");
			for (let i = 0; i < candidats.length;i++) {
				if (index === i) {
					candidats[i].age = age;
				}
			}
			AFFICHAGERDESFCT(candidats);
			break;
		
		}
		default :{
			console.log("le nomber incorrect ");
		}
	}
}
modifierinfo()
function AFFICHAGERDESFCT(tab) {
	for (let i = 0; i < tab.length; i++) {
		console.log(`cin : ${tab[i].cin}\nnom : ${tab[i].nom}\nprenom : ${tab[i].prenom}\npartipolitique : ${tab[i].partiPolitique}\nage : ${tab[i].age}\nelecteurs : ${tab[i].electeurs.length}\n`);
	}
}












