document.getElementById("inputtxt").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    newElement();
  }
})
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputtxt").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t); 
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("inputtxt").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
  // Create the close button for the new list item
  const listItems = document.querySelectorAll("li");
  listItems.forEach(function(item) {
    const span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(document.createTextNode("\u00D7"));
    item.appendChild(span);
  });

  // Attach the click event listener to the close button
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close")) {
      var div = event.target.parentElement;
      div.style.display = "none";
    }
  });
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);