console.log("conditions.js Connected");

// Egal
// 5 == 5 -> true
// 4 == 5 -> false

// different
// 4 != 3 -> true
// 4 != 4 -> false

// plus petit / grand
// 4 < 4 -> false
// 4 > 3 -> true

// sup./inf. ou égal
// 4 >= 4 -> true
// 3 >= 4 -> false
// 4 <= 5 -> true
// 3 <= 2 -> false

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Toujours utiliser le "==="

// const acces = false;
// const acces = true;

// if (acces) {
//   console.log("Acces granted");
// } else {
//   console.log("Acces denied");
// }

// const age = 28;
// const bank = 900;

// if (age >= 18 || bank >= 0) {
//   console.log("Acces granted");
// } else {
//   console.log("Acces Denied");
// }

// if (age >= 18) {
//   console.log("Acces granted");
// } else if (bank <= 50) {
//   console.log("Need money");
// } else {
//   console.log("Acces denied");
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Truthy & Falsey

// const age = ""; // false, 0, "", null, undefined, NaN

// if (age) {
//   console.log("C'est une valeur Vrai");
// } else {
//   console.log("C'est une valeur Fausse");
// }
