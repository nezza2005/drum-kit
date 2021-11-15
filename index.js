
//Detecting HTML buttons clicked.
for (var i=0; i<document.querySelectorAll(".drum").length; i++) {

//Dom Manipulation.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //we want to add an alert to each .drum in the array starting at 0.
//What to do when click gets detected.
var btnHTML = this.innerHTML;

listen(btnHTML)
buttonAnimation(btnHTML)


  });

}

//Detecting keyboard press.
document.addEventListener("keydown", function(event) { //event is an html object, .key is its property.

  listen(event.key) // key captures just the value of the key in lowercase. like "e" or "f".
  buttonAnimation(event.key)
})


function listen(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
     break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();

      break;
    case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;


    default: alert("This key is not assigned to any sounds.");

}
}


function buttonAnimation(currentKey) {
 let activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");

//timeout so that pressed class CSS doesnt stay permanent and only shadows the drum kit highlighted by the event for 0.1 seconds.
  setTimeout(function() {
    activeButton.classList.remove("pressed");
}, 100);

}
