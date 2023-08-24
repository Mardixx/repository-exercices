// let userInput = prompt("Choisissez le nom d'un personnage de One piece");
// let minusValue = userInput.toLowerCase();
// switch (minusValue) {
//   case "luffy" || "monkey d. luffy":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "zoro" || "roronoa zoro":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "nami":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "ussop":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "sanji":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "chopper" || "tony tony chopper":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "robin" || "nico robin":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "franky":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "brook":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "jinbe":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   default:
//     console.log("Pas encore dans la Database");
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------------
//
// -------------------------------------------------------------------------------------------------------------------------------------------------------
// Guess games

// function guessGame() {
//   let randomNbr = Math.floor(Math.random() * 11);

// let randomNbr = Math.random() * 11;
// let fixedNbr = Math.floor(randomNbr);

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

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// let h = 0;

// do {
//   console.log(h);
//   h++;
// } while (h < 31);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// const listUser = ["ToshirO", "Matsumoto", "Unohana", "Rukia"];

// listUser.pop();
// listUser.push("Ichigo", "Renji");
// listUser.shift();
// listUser.unshift("Renji", "Ichigo");
// console.log(listUser.length);
// console.log(listUser.indexOf("ToshirO"));
// console.log(listUser);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// let mathMax = Math.max(1, 5);
// console.log(mathMax);

// -------------------------------------------------------------------------------------------------------------------------------------------------------
//
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// let onePiece = 1072
// onePiece = 107
// let tome = ;
// console.log(onePiece);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// const onePiece = 1072;
// onePiece = 107;
// const tome = ;
// console.log(onePiece);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
const nbr = document.querySelector(".nrTodo b");
const input = document.querySelector("#name");

button.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.classList.add("items");
  newItem.innerText = input.value;
  newItem.addEventListener("click", deleteItem);
  todoList.appendChild(newItem);
  nbr.innerText = items.length;
  input.value = "";
});
function deleteItem(e) {
  e.target.remove();
  nbr.innerText = items.length;
}
