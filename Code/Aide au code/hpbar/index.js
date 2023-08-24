var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("health").innerHTML = health;
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
        i = 0;
      }
      else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
