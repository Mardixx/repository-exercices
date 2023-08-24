const button = document.querySelector("#submit"); // Selection du button dans le HTML
const todoList = document.querySelector("#todo-list"); // Selection de l'UL dans le HTML
const items = todoList.children; // Selection les enfants qui compose l'UL #todo-list
const todoNr = document.querySelector(".nrTodo b"); // Slection du h2 dans le HTML

// Ajout d'un evenement "onclick" sur le button
button.addEventListener("click", function () {
  const newItem = document.createElement("li"); // créer une balise <li>
  newItem.classList.add("item"); // ajoute une classe à la liste
  newItem.innerText = `item ${items.length + 1}`; // Ajout un nom à la liste
  todoList.appendChild(newItem); // créer la liste dans le html (pour que la liste s'affiche sur le site)
  todoNr.innerText = items.length; // modification du text après (Nombre d'items :)
});
