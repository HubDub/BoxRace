console.log("JS is on deck");
console.log("this is updating");

document.getElementById("button").addEventListener("click", function( event) {
  console.log("you clicked the button");
  race();
});

window.onload = function() {
  race();
};

var race = function() {

  //we'll create a starting position:
  var position1 = 0;
  var position2 = 0;
  var position3 = 0;
  var position4 = 0;
  var position5 = 0;
  var winnerOutput = document.getElementById("winner");
  winnerOutput.innerHTML = "Who will win??";

  var time = setInterval(move, 10);  //setInterval will call the function move every 10 ms.
  console.log("after declaring time");
  //now we create the move function that will be called by setInterval. move will have the variable pos increase by 1 each time it's called and that increments the left property of the box each time. it is surrounded by an if statement so that it will end instead of just moving to the right endlessly.
  function move() {

    if(position1 >= 900 || position2 >= 900 || position3 >= 900 || position4 >= 900 || position5 >= 900)
    {
      clearInterval(time);
      if(position1 >= 900)
      {winnerOutput.innerHTML = "<span style = 'color:red'>Red Wins!</span>";}
      else if(position2 >= 900)
      {winnerOutput.innerHTML = "<span style = 'color:blue'>Blue Wins!</span>";}

      else if(position3 >= 900)
      {winnerOutput.innerHTML = "<span style = 'color:yellow'>Yellow Wins!</span>";}

      else if(position4 >= 900)
      {winnerOutput.innerHTML = "<span style = 'color:Purple'>Purple Wins!</span>";}

      else
      {winnerOutput.innerHTML = "<span style = 'color:orange'>Orange Wins!</span>";}

      console.log("after moving boxes");
    }
    else
    {
      position1 += Math.floor((Math.random() * 4) + 1);
      box.style.left = position1+"px";

      position2 += Math.floor((Math.random() * 4) + 1);
      box2.style.left = position2+"px";

      position3 += Math.floor((Math.random() * 4) + 1);
      box3.style.left = position3+"px";

      position4 += Math.floor((Math.random() * 4) + 1);
      box4.style.left = position4+"px";

      position5 += Math.floor((Math.random() * 4) + 1);
      box5.style.left = position5+"px";

    }
  }
}
console.log("after window load");