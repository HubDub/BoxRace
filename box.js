console.log("JS is on deck");

window.onload = function() {
  //we'll create a starting position:
  var position1 = 0;
  var position2 = 0;
  var position3 = 0;
  var position4 = 0;
  var winnerOutput = document.getElementById("winner");
  winnerOutput.innerHTML = "Who will win??";

  var time = setInterval(move, 10);  //setInterval will call the function move every 10 ms.

  //now we create the move function that will be called by setInterval. move will have the variable pos increase by 1 each time it's called and that increments the left property of the box each time. it is surrounded by an if statement so that it will end instead of just moving to the right endlessly.
  function move() {
    if(position1 >= 900 || position2 >= 900 || position3 >= 900 || position4 >= 900) {
      clearInterval(time);
      if(position1 >= 900) {
        winnerOutput.innerHTML = "Red Wins!";
      } else if(position2 >= 900) {
        winnerOutput.innerHTML = "blue Wins!";
      } else if(position3 >= 900) {
        winnerOutput.innerHTML = "Yellow Wins!";
      } else {
        winnerOutput.innerHTML = "Purple Wins!";
      }
    }
    else {
      position1 += Math.floor((Math.random() * 4) + 1);
      box.style.left = position1+"px";

      position2 += Math.floor((Math.random() * 4) + 1);
      box2.style.left = position2+"px";

      position3 += Math.floor((Math.random() * 4) + 1);
      box3.style.left = position3+"px";

      position4 += Math.floor((Math.random() * 4) + 1);
      box4.style.left = position4+"px";
    }
  }
}