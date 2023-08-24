// TodoList Add items

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

// // -------------------------------------------------------------------------------------------------------------------------------------------------------
// //Math.max

// function maxMath(nbr1 = 1, nbr2 = 550) {
//   if (nbr1 > nbr2) {
//     return nbr1;
//   } else {
//     return nbr2;
//   }
// }
// console.log(maxMath());

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// let userInput = prompt("Typye smth");
// let minusValus = userInput.toLowerCase();

// switch (minusValus) {
//   case "luffy":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "zoro":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   case "nami":
//     console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
//     break;
//   default:
//     console.log(`idk`);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// if (minusValus === "luffy") {
//   console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
// } else if (minusValus === "nami") {
//   console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
// } else if (minusValus === "zoro") {
//   console.log(`Membres de l'Équipage du Chapeau de Paille "One piece"`);
// } else {
//   console.log(`idk`);
// }
