$(document).ready(function(){

  // TODO build this with an AJAX call that returns an array of images on the server
  var images = [
  '/img/junk0.jpg',
  '/img/junk1.jpg',
  '/img/junk2.jpg',
  '/img/junk3.jpg',
  '/img/junk4.jpg',
  '/img/healthy0.jpg',
  '/img/healthy1.jpg',
  '/img/healthy2.jpg',
  '/img/healthy3.jpg',
  '/img/healthy4.jpg'
  ];

  var stimuli = []
  for (var i = 0; i < 30; i++) {
    
    var image = new Image();
    image.src = images[Math.floor(10*Math.random())%images.length]
    
    var left = true, dashed = true;
    if(Math.floor(10*Math.random())%2){left=true}else{left=false}
    if(Math.floor(10*Math.random())%2){dashed=true}else{dashed=false}
    
    stimuli.push(
    {
      'left':left,
      'dashed':dashed,
      'img':image
    });
  };
  

  // setTimeout
  var step=0

  function start(){
    $('#slide').src = stimuli[step].image.src
    if (step<stimuli.length){
      step++
    } else {
      step=0
    }
    setTimeout("start()",1250)
  }

  start()

});

// Outline
// First a test round
// Get an array of JSON objects of the form {'src':'fruit.jpg','left':true,'dashed':false}
// setTimeout on a function to display the images 1 by 1.
//  - images should display for 1250 ms (unless c or m is clicked)
//  - There should be a 500ms gap between images 
// Listen for c and m and score accordingly
// when the user clicks the answer button you set the timeout for 500ms and then transition to the next game state.


var score = 0;
var total_correct = 0;
var total_options = 0;
var display_time = 1250; // ms
// random selection, with replacement
var time_shown = new Date();


// image
//  - left
//  - right
//  - solid
//  - dashed

// Populate a 3d array with random images, sides, and borders
// var slideimages = new Array() // create new array to preload images
// slideimages[0] = new Image() // create new instance of image object
// slideimages[0].src = "firstcar.gif" // set image src property to image path, preloading image in the process
// slideimages[0][0][0]



// Event Listeners
// $( "body" ).keypress(function( event ) {
//   if(event.which==99){
//     //c
//   }
//   if(event.which==109){
//     //m
//   }
// });

// then you can add event handlers to button presses
// and record the time when those happen
// then you can compare.

// setTimeout and setInterval
// they guarantee a minimum but not a maximum time passage before an event happens.




// from http://stackoverflow.com/questions/20055364/alternating-between-nested-settimeout-loops-with-different-delays
var stimuli = new Array(1,2,3,4,"*");
var cells = new Array("TopLeft", "TopRight", "BottomLeft", "BottomRight", "MiddleMiddle");

var alreadyOn = false;

// call startUp on load instead of displayStimuli
function startUp() {
setTimeout(displayStimuli, 1200);
}

function displayStimuli(){
if(stimuli.length>0) { // if we have any stimuli left
if(alreadyOn) {
document.getElementById(cells.shift()).innerHTML="";
stimuli.shift(); // here we remove elements from the arrays

setTimeout(displayStimuli, 500); // show again in 500ms
} else {
document.getElementById(cells[0]).innerHTML=stimuli[0];

setTimeout(displayStimuli, 700); // remove in 700ms
}
alreadyOn = !alreadyOn; // flip it for the next round
} else { // no stimuli left, move on.
showRecall();
}
}