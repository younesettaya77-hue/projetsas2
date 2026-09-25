let prompt = require("prompt-sync")();
const candidats = [
  {
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: [],
  },
  {
    cin: "PA12323",
    nom: "Salhi",
    prenom: "Anas",
    partiPolitique: "pps",
    age: 26,
    electeurs: ["AB123456", "PA12323"],
  },
  {
    cin: "PB64723",
    nom: "Et-taya",
    prenom: "Younes",
    partiPolitique: "Pam",
    age: 40,
    electeurs: ["PB64723"],
  },
];
function Afficheruncandidat(candidat){
	return `${candidat.cin} - ${candidat.nom} ${candidat.prenom} - ${candidat.age} ans (${candidat.partiPolitique}) ${(candidat.partiPolitique!="Indépendant") ? candidat.electeurs.length + " votes" : ""}`;
}
//Trier les candidats par nombre de votes (ordre décroissant pour voir les gagnants).
function tridecroissant(candidats) {
  for (let i = 0; i < candidats.length; i++) {
	for (let j = 0; j < candidats.length - i - 1; j++) {
	  if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
		let N = candidats[j];
		candidats[j] = candidats[j + 1];
		candidats[j + 1] = N;
	  }
	}
  }
}
//1. Ajouter un nouveau candidat :
function Ajoutercondidat(candidats) {
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
    electeurs: [],
  };
  candidats.push(condidat);
}
// 2. Ajouter plusieurs candidats à la fois.
function Ajouterplusieurs(candidats) {
  let nbr = +prompt("combien de condidats tu veux Ajouter : ");
  for (let i = 0; i < nbr; i++) {
    Ajoutercondidat(candidats);
  }
}
//3. Afficher la liste des candidats :
function Afichierliste(candidats) {
  console.log("1 : tu veux affichier les candidats d'ordre decroissant : ");
  console.log("2 : tu veux filtrer et affichier les candidat avec mem parti politique : ");
  let choix = +prompt("donner ton choix : ");
  switch (choix) {
    case 1: {
      tridecroissant(candidats);
      affichageDesCandidats(candidats)
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
	  affichageDesCandidats(tab)
	  break;
    }
  }
}
//4. Voter pour un candidat :
function voterparcandidat(){
  let cin = prompt("doner ton cin : ");
		for (let i = 0; i < candidats.length; i++) {
				if (candidats[i].electeurs.includes(cin)) {
					console.log(" Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau .");
					return;
				}
		}
    let cincand = prompt("donner moi cin de candidat tu veux voter a lui :")
		for (let i = 0; i < candidats.length; i++) {
			if (candidats[i].cin === cincand) {
				candidats[i].electeurs.push(cin);
				return;
			}
		}
}
//5. Modifier les informations d'un candidat :
function modifierinfo(candidats){
  console.log("1 : Modifier la parti politique  ");
  console.log("2 : Modifier l'age . ");
  let choix = +prompt("doner ton choix  ");
  switch (choix) {
    case 1: {
      let index = +prompt("donner l'index de l'objet tu veux modifier .");
      let partpo = prompt("veillez donner la parti politique . ");
      for (let i = 0; i < candidats.length; ) {
        if (index === i) {
          candidats[i].partiPolitique = partpo;
        }
      }
      console.log(candidats);
      break;
    }
    case 2: {
      let index = +prompt("donner l'index de l'objet tu veux modifier :");
      let age = +prompt("veillez donner l'age : ");
      for (let i = 0; i < candidats.length; ) {
        if (index === i) {
          candidats[i].age = age;
        }
      }
      console.log(candidats);
      break;
    }
  }
}
function affichageDesCandidats(candidats){
  for (let i = 0; i < candidats.length; i++) {
    console.log(`${i+1} ${Afficheruncandidat(candidats[i])}`);
  }
}
//6. Supprimer un candidat :
function suprimercandid(candidats){
  let cin1 = prompt("donner moi un cin pour suprimer leur candidatset :");
  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].cin === cin1) {
      candidats.splice(i,1);
    }
  }
}
//7. Rechercher des candidats :
function rechercheNom(tab){
  let Nom = prompt("donner moi le nom de candidat tu veux :");
  for (let i = 0; i < tab.length; i++) {
    if (tab[i].nom === Nom) {
      console.log( Afficheruncandidat(tab[i]));
      return;
    }
  }
  console.log("aucun candidat trouvé");
}
//8. Statistiques de l'élection :
function statistiques(candidats){
  console.log(" le nombre total de candidats est : "+candidats.length);
  let compteur = 0 ;
  for(let i = 0 ; i <candidats.length ;i++){
    compteur += candidats[i].electeurs.length ;
  }
  console.log(" le nombre total de votes exprimés dans toute l'élection est : "+compteur);
  console.log("  le Top 3 des candidats ayant le plus de votes est : ");
  tridecroissant(candidats);
    for(let i = 0 ; i < 3 ;i++){
         console.log(`${i+1} ${Afficheruncandidat(candidats[i])}`);
    }
  console.log(" le nombre total de candidats est : "+candidats.length);

}