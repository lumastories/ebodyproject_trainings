'use strict';
// TODO read this: http://docs.jspsych.org/plugins/jspsych-categorize/

// TODO Randomly generate these scenes.
var scenes = [
                [
                  ["img/junk0.jpg", "img/junk1.jpg", "img/healthy3.jpg","img/junk1.jpg"],
                  ["img/junk4.jpg", "img/junk4.jpg", "img/junk4.jpg", "img/junk1.jpg"],
                  ["img/junk0.jpg", "img/junk1.jpg", "img/junk0.jpg", "img/junk3.jpg"],
                  ["img/junk1.jpg", "img/junk3.jpg", "img/junk4.jpg", "img/junk1.jpg"]
                ],
                [
                  ["img/junk0.jpg", "img/junk1.jpg", "img/junk1.jpg", "img/junk1.jpg"],
                  ["img/junk4.jpg", "img/junk2.jpg", "img/junk4.jpg", "img/junk1.jpg"],
                  ["img/junk0.jpg", "img/junk1.jpg", "img/junk0.jpg", "img/junk3.jpg"],
                  ["img/junk1.jpg", "img/healthy0.jpg", "img/junk4.jpg", "img/junk1.jpg"]
                ],
                [
                  ["img/junk0.jpg", "img/junk0.jpg", "img/healthy3.jpg", "img/junk1.jpg"],
                  ["img/healthy2.jpg", "img/junk4.jpg", "img/junk2.jpg", "img/junk1.jpg"],
                  ["img/junk2.jpg", "img/junk1.jpg", "img/junk0.jpg", "img/junk3.jpg"],
                  ["img/junk0.jpg", "img/junk4.jpg", "img/junk4.jpg", "img/junk0.jpg"]
                ],
                
            ];

var pattern = [
                ["img/junk0.jpg", "img/junk1.jpg", "img/healthy3.jpg", "img/junk1.jpg"],
                ["img/junk4.jpg", "img/junk4.jpg", "img/junk4.jpg", "img/junk1.jpg"],
                ["img/junk0.jpg", "img/junk1.jpg", "img/junk0.jpg", "img/junk3.jpg"],
                ["img/junk1.jpg", "img/junk3.jpg", "img/junk4.jpg", "img/junk1.jpg"]
            ];
var image_size = 100; // pixels
var grid_stimulus = jsPsych['vsl-grid-scene'].generate_stimulus(pattern, image_size);

// BLOCKS
var welcome_block = {
  type:"text",
  text:"<h1 class='center-content'>Welcome to the experiment.<br /> Press any key to begin.</h1>",
  is_html:true
}
var instructions_block = {
  type: "text",
  text: "<h1 class='center-content'>Locate the healthy food in the grid. <br /> use Q W E R A S D F Z X C V</h1>",
  is_html:true
}
// SIMPLIFIED
var vsl_block = {
    type: 'vsl-grid-scene',
    stimuli: scenes
};

// TODO: change this...
var categorization_block = {
    type: 'categorize',
    stimuli: grid_stimulus,
    key_answer: ['e'],
    text_answer: "blablabla",
    choices: ['q','w','e','r','t','a','s','d','f','z','x','c','v'],
    correct_text: "<p class='prompt'>Correct, this is a %ANS%.</p>",
    incorrect_text: "<p class='prompt'>Incorrect, this is a %ANS%.</p>",
    is_html: true,
    prompt: "<p class='prompt'>Press P for letter. Press Q for number.</p>"
};
var debrief_block = {
  type: "text",
  text: function() {
  return "<h1>Nicely done...</h1>";
  }
};

var experiment = [];
experiment.push(welcome_block);
experiment.push(instructions_block);
experiment.push(categorization_block);
experiment.push(debrief_block);

jsPsych.init({
    experiment_structure: experiment,
    on_finish: function(data) { // for debugging
      jsPsych.data.displayData('json');
  }
});
