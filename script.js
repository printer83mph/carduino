var left = "a";
var up = "w";
var right = "d";
var down = "s";

window.onload = function() {
  console.log("running");
  document.onkeypress = function(e) {
    e = e || window.event;
    switch (e.key) {
      case left:
        console.log("left");
        break;
      case up:
        console.log("up");
        break;
      case right:
        console.log("right");
        break;
      case down:
        console.log("down");
        break;
      default:
        console.log("wrong");
    }
  }
}
