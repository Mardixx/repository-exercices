// Selecteurs
// document.querySelector('h4').style.background="orange"
// const baliseHTML = document.querySecelctor("h4")
// Prority : #id > .class > baliseHTML

// Clic Event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const answer = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  // questionContainer.classList.toggle("clicked");
});

btn1.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "green";
});
btn2.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "red";
});
btn3.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "red";
});
