$(function(){

  // TODO build this with an AJAX call that returns an array of images on the server
  var images = [
  'img/junk0.jpg',
  'img/junk1.jpg',
  'img/junk2.jpg',
  'img/junk3.jpg',
  'img/junk4.jpg',
  'img/healthy0.jpg',
  'img/healthy1.jpg',
  'img/healthy2.jpg',
  'img/healthy3.jpg',
  'img/healthy4.jpg'
  ];

  stimuli = new Array();
  for (var i = 0; i < 30; i++) {
    
    var image = new Image();
    image.src = images[Math.floor(10*Math.random())%images.length]
    
    var float_right = true;
    var dashed = true;
    if(Math.floor(10*Math.random())%2){float_right=true}else{float_right=false}
    if(Math.floor(10*Math.random())%2){dashed=true}else{dashed=false}
    
    stimuli.push(
    {
      'float_right':float_right,
      'dashed':dashed,
      'img':image
    });
  };
  
console.log(stimuli);

var step=0
function slideIt(){
  time_shown = _.now();
  $("#slide").attr("src", stimuli[step].img.src);
  
  if(stimuli[step].dashed){
    $("#game").attr("class", 'dashed');  
  }else{
    $("#game").attr("class", 'solid');  
  }
  
  if(stimuli[step].float_right){
    $("#slide").addClass('right');  
  } else {
    $("#slide").addClass('left');  
  }

  if (step<stimuli.length){
    step++;
  } else {
    step=0;
  }
}
var handle = setInterval(slideIt, 1250);

var test = setTimeout(function() {
  console.log("sadf");
  test = null;
},10000);

// Event Listeners
$( "body" ).keypress(function( event ) {
  
  if(event.which==99){ // c
    response_time = time_shown - _.now();
    console.log(response_time);
    
    if(stimuli[step].left  && !dashed){
      console.log('correct');

    }else{
      console.log('WRONG');

    }
    console.log(stimuli[step]);
  }
// have the setInterval Kick off the setTimeout only if the setTimeout handler is empty.
  if(event.which==109){ // m
    response_time = time_shown - _.now();
    console.log(response_time);
    if(!stimuli[step].left && !dashed){
      console.log('correct');
      //
    }else{
      console.log('WRONG');
      //
    }
    console.log(stimuli[step]);
  }
});



// var id = setTimeout(fn, delay); – Initiates a single timer which will call the specified function after the delay. The function returns a unique ID with which the timer can be canceled at a later time.
// var id = setInterval(fn, delay); – Similar to setTimeout but continually calls the function (with a delay every time) until it is canceled.
// clearInterval(id);, clearTimeout(id); – Accepts a timer ID (returned by either of the aforementioned functions) and stops the timer callback from occurring.


});