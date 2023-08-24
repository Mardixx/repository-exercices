console.log("minigame.js Connected");

// Générer un nombre aléatoire
// Donner au joueur la capacité de deviner
// faire deviner le joueur et s'il a faux, on lui repose la question
// s'il gagne, on stop le jeu

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// function guessGame() {
//   let randomNbr = Math.floor(Math.random() * 11); // Le Math.floor arrondis tujours au chiffre en dessous // J'aurai pu faire aussi :

// let randomNbr = Math.random() * 11;
// let fixedNbr = Math.floor(randomNbr); // Et utiliser le fixedNbr dans le doWhile ci dessous

//   let guess;

//   do {
//     guess = prompt("Choisissez un nombre entre 1 et 10");
//     if (randomNbr > guess) {
//       console.log("Trop petit");
//     } else if (randomNbr < guess) {
//       console.log("Trop grand");
//     }
//   } while (guess != randomNbr);
// }
// guessGame();
