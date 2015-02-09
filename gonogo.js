var welcome_block = {
  type:"text",
  text:"<h1 class='center-content'>Welcome to the experiment.<br /> Press any key to begin.</h1>",
  is_html:true
}
var instructions_block = {
  type: "text",
  text: "<h1 class='center-content'>Press C for images on the left side and M for images on the right side. <br> If the image has a dashed border do not press any key.</h1>",
  is_html:true
};
var stimuli_images = [
  'img/healthy0.jpg',
  'img/healthy1.jpg',
  'img/healthy2.jpg',
  'img/healthy3.jpg',
  'img/healthy4.jpg',
  'img/junk0.jpg',
  'img/junk1.jpg',
  'img/junk2.jpg',
  'img/junk3.jpg',
  'img/junk4.jpg'
];

var test_stimuli = _.map(stimuli_images,
  function(image){
    var s='left',k=77,b='5px solid #000',go=true;
    if(Math.floor(Math.random()*10)%2){s='right';k=67}
    if(image.substring(4,5)=='j'){go=false;b='5px dashed #000'}
    return { 
      stimulus: image,
      side: s,
      correct_key: k,
      border: b,
      go: go
    }
  });

var all_trials = jsPsych.randomization.repeat(test_stimuli, 2);
var the_trials = _.map(all_trials, function(t){return "<img src='"+t.stimulus+"' style='margin:0 auto;float:"+t.side+";padding-"+t.side+":500px;border:"+t.border+";'/>";})
var test_block = {
  type: "single-stim",
  stimuli: the_trials,
  is_html: true,
  choices: ['c','m'],
  timing_response: 1500
}

function getAverageResponseTime() {
  var trials = jsPsych.data.getTrialsOfType('single-stim');
  var sum_rt = 0;
  var valid_trial_count = 0;
  for (var i = 0; i < trials.length; i++) {
    if (trials[i].rt > -1) {
        sum_rt += trials[i].rt;
        valid_trial_count++;
    }
  }
  return Math.floor(sum_rt / valid_trial_count);
}

function getScore(){
  var trials = jsPsych.data.getTrialsOfType('single-stim');
  var total = _.filter(all_trials,function(t){return t.go}).length;
  console.log(all_trials);
  var points = 0;
  for (var i = 0; i < total; i++) {
    if(all_trials[i].go){
      if(trials[i].key_press==all_trials[i].correct_key) {points++;}
    }
  }
  return {
    string:points+"/"+total,
    percent:(points/total)*100
  }
}

var debrief_block = {
  type: "text",
  text: function() {
  return "<h1><span style='color:blue;'>"+getScore().percent+"%</span><ul><li>Average response time: "+getAverageResponseTime()+"ms</li><li>Score: "+ getScore().string +"</li></ul><br/> Press any key to complete the experiment. Thank you!</h1>";
  }
};

var experiment = [];
experiment.push(welcome_block);
experiment.push(instructions_block);
experiment.push(test_block);
experiment.push(debrief_block);

jsPsych.preloadImages(stimuli_images, function(){ startExperiment(); });

function startExperiment(){
  jsPsych.init({
      experiment_structure: experiment,
      on_finish: function(data) {
      jsPsych.data.displayData('json');
    }
  });
}