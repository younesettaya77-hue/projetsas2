let prompt = require("prompt-sync")();
const candidats = [{
	cin: "AB16",
	nom: "Boushaba",
	prenom: "Soufiane",
	partiPolitique: "Indépendant",
	age: 40,
	electeurs: []
},
{
	cin: "CF6",
	nom: "Imrane",
	prenom: "Bahha",
	partiPolitique: "Indépendant",
	age: 22,
	electeurs: []
},
{
	cin: "PA12323",
	nom: "Salhi",
	prenom: "Anas",
	partiPolitique: "pps",
	age: 26,
	electeurs: ["PA12323"]
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
	let cin1 = prompt("doner ton cin pour verifier : ");
	function verifiercin() {
		for (let i = 0; i < candidats.length; i++) {
			for (let j = 0; j < candidats[i].electeurs.length; j++) {
				if (candidats[i].electeurs[j].includes(cin1)) {
					console.log(" Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau .");
					return;
				}
			}
		}
		console.log("cin existe pas . ");

	}

	function voterbien() {
		for (let i = 0; i < candidats.length; i++) {
			let cincand = prompt("donner moi cin de candidat tu veux voter a lui :")
			if (candidats[i].cin === cincand) {
				console.log(candidats[i].electeurs.push("cin1"));
				AFFICHAGERDESFCT(candidats);
				return;
			}
		}
		console.log("ce cin n'existe dans les candidats . ");
	}


}
function modifierinfo() {
	console.log("1 : Modifier la parti politique  ");
	console.log("2 : Modifier l'age ");
	let choix = +prompt("doner ton choix : ");
	switch (choix) {
		case 1: {
			let index = +prompt("donner l'index de l'objet tu veux modifier :");
			let partpo = prompt("veillez donner la parti politique :  ");
			for (let i = 0; i < candidats.length; i++) {
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
			for (let i = 0; i < candidats.length; i++) {
				if (index === i) {
					candidats[i].age = age;
				}
			}
			AFFICHAGERDESFCT(candidats);
			break;

		}
		default: {
			console.log("le nomber incorrect ");
		}
	}

}

function AFFICHAGERDESFCT(tab) {
	for (let i = 0; i < tab.length; i++) {
		console.log(`cin : ${tab[i].cin}\nnom : ${tab[i].nom}\nprenom : ${tab[i].prenom}\npartipolitique : ${tab[i].partiPolitique}\nage : ${tab[i].age}\nelecteurs : ${tab[i].electeurs.length}\n`);
	}
}
function suprimercandid(obj) {
	let tab2 = [];
	let cin1 = prompt("donner moi un cin pour suprimer leur objet :");
	for (let i = 0; i < obj.length; i++) {
		if (obj[i].cin !== cin1) {
			tab2.push(obj[i]);
		}
	}
	console.log(tab2);
}
function rechercheNom(tab) {
	let Nom = prompt("donner moi le nom de candidat tu veux :");
	for (let i = 0; i < tab.length; i++) {
		if (tab[i].nom === Nom) {
			console.log(`cin : ${tab[i].cin}\nNom : ${tab[i].nom}\nprenom : ${tab[i].prenom}\npartipolitique : ${tab[i].partiPolitique}\nage : ${tab[i].age}\nelecteurs : ${tab[i].electeurs.length}`);
			return;
		}
	}
	console.log(tab);
}












