
// document.querySelectorAll("button").addEventListener("click", function (){
//   alert("i got clicked");
// }); unnamed function 😂😂😂

//-------------------------------------------------------------------------------------------------------------------
//detection the clicks
noofbuttons=document.querySelectorAll(".drum").length;

for(var i=0;i<noofbuttons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//detecting the keyboard press

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){

  switch(key){
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); //creates new audio object
      tom1.play();   // calling a method play 
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3"); //creates new audio object
      tom2.play();   // calling a method play 
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3"); //creates new audio object
      tom3.play();   // calling a method play 
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3'); //creates new audio object
      tom4.play();   // calling a method play 
      break;

    case "j":
      var crash = new Audio('sounds/crash.mp3'); //creates new audio object
      crash.play();   // calling a method play 
      break;

    case "k":
      var snare = new Audio('sounds/snare.mp3'); //creates new audio object
      snare.play();   // calling a method play 
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3'); //creates new audio object
      kick.play();   // calling a method play 
      break;

    default: console.log(buttonInnerHTML);
  }
}


//--------------animations-----------------------------------

function buttonAnimation(currentKey){
  var activebutton=document.querySelector("."+currentKey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
    
  },100);
}