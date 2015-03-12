'use strict';
var stimuli_images = ['Stimuli/eAverage1.jpg', 'Stimuli/eAverage2.jpg', 'Stimuli/eAverage3.jpg', 'Stimuli/eAverage4.jpg', 'Stimuli/eAverage5.jpg', 'Stimuli/eAverage6.jpg', 'Stimuli/eAverage7.jpg', 'Stimuli/eAverage8.jpg', 'Stimuli/eAverage9.jpg', 'Stimuli/eAverage10.jpg', 'Stimuli/eAverage11.jpg', 'Stimuli/eAverage12.jpg', 'Stimuli/eAverage13.jpg', 'Stimuli/eAverage14.jpg', 'Stimuli/eAverage15.jpg', 'Stimuli/eAverage16.jpg', 'Stimuli/eAverage17.jpg', 'Stimuli/eAverage18.jpg', 'Stimuli/eAverage19.jpg', 'Stimuli/eAverage20.jpg', 'Stimuli/eAverage21.jpg', 'Stimuli/eAverage22.jpg', 'Stimuli/eAverage23.jpg', 'Stimuli/eAverage24.jpg', 'Stimuli/eAverage25.jpg', 'Stimuli/eAverage26.jpg', 'Stimuli/eAverage27.jpeg', 'Stimuli/eAverage28.jpg', 'Stimuli/eAverage29.jpg', 'Stimuli/eAverage30.jpg', 'Stimuli/eAverage31.jpg', 'Stimuli/eAverage32.jpg', 'Stimuli/eAverage33.jpg', 'Stimuli/eAverage34.jpg', 'Stimuli/eAverage35.jpg', 'Stimuli/eAverage36.jpg', 'Stimuli/eAverage37.jpg', 'Stimuli/eAverage38.jpg', 'Stimuli/eAverage39.jpg', 'Stimuli/eAverage40.jpg', 'Stimuli/eAverage41.jpg', 'Stimuli/eAverage42.jpg', 'Stimuli/eAverage43.jpg', 'Stimuli/eAverage44.jpg', 'Stimuli/eAverage45.jpg', 'Stimuli/eAverage46.jpg', 'Stimuli/eAverage47.jpg', 'Stimuli/eAverage48.jpg', 'Stimuli/eAverage49.jpg', 'Stimuli/eAverage50.jpg', 'Stimuli/eAverage51.jpg', 'Stimuli/eAverage52.jpg', 'Stimuli/eAverage53.jpg', 'Stimuli/eAverage54.jpg', 'Stimuli/eAverage55.jpg', 'Stimuli/eAverage56.jpg', 'Stimuli/eAverage57.jpg', 'Stimuli/eAverage58.jpg', 'Stimuli/eAverage59.jpg', 'Stimuli/eAverage60.jpg', 'Stimuli/eAverage61.jpg', 'Stimuli/eAverage62.jpg', 'Stimuli/eAverage63.jpg', 'Stimuli/eAverage64.jpg', 'Stimuli/eAverage65.jpg', 'Stimuli/eAverage66.jpg', 'Stimuli/eAverage67.jpg', 'Stimuli/eAverage68.jpg', 'Stimuli/eAverage69.jpg', 'Stimuli/eAverage70.jpg', 'Stimuli/eAverage71.jpg', 'Stimuli/eAverage72.jpg', 'Stimuli/eAverage73.jpg', 'Stimuli/eAverage74.jpg', 'Stimuli/eAverage75.jpg', 'Stimuli/eAverage76.jpg', 'Stimuli/eAverage77.jpg', 'Stimuli/eAverage78.jpg', 'Stimuli/eAverage79.jpg', 'Stimuli/eAverage80.jpg', 'Stimuli/eUltraT1.jpg', 'Stimuli/eUltraT2.jpg', 'Stimuli/eUltraT3.jpg', 'Stimuli/eUltraT4.jpg', 'Stimuli/eUltraT5.jpg', 'Stimuli/eUltraT6.jpg', 'Stimuli/eUltraT7.jpg', 'Stimuli/eUltraT8.jpg', 'Stimuli/eUltraT9.jpg', 'Stimuli/eUltraT10.jpg', 'Stimuli/eUltraT11.jpg', 'Stimuli/eUltraT12.jpg', 'Stimuli/eUltraT13.jpg', 'Stimuli/eUltraT14.jpg', 'Stimuli/eUltraT15.jpg', 'Stimuli/eUltraT16.jpg', 'Stimuli/eUltraT17.jpg', 'Stimuli/eUltraT18.jpg', 'Stimuli/eUltraT19.jpg', 'Stimuli/eUltraT20.jpg', 'Stimuli/eUltraT21.jpg', 'Stimuli/eUltraT22.jpg', 'Stimuli/eUltraT23.jpg', 'Stimuli/eUltraT24.jpg', 'Stimuli/eUltraT25.jpg', 'Stimuli/eUltraT26.jpg', 'Stimuli/eUltraT27.jpg', 'Stimuli/eUltraT28.jpg', 'Stimuli/eUltraT29.jpg', 'Stimuli/eUltraT30.JPG', 'Stimuli/eUltraT31.jpg', 'Stimuli/eUltraT32.jpg', 'Stimuli/eUltraT33.jpg', 'Stimuli/eUltraT34.jpg', 'Stimuli/eUltraT35.jpg', 'Stimuli/eUltraT36.jpg', 'Stimuli/eUltraT37.jpg', 'Stimuli/eUltraT38.jpg', 'Stimuli/eUltraT39.jpg', 'Stimuli/eUltraT40.jpg', 'Stimuli/eUltraT41.jpg', 'Stimuli/eUltraT42.jpg', 'Stimuli/eUltraT43.jpg', 'Stimuli/eUltraT44.jpeg', 'Stimuli/eUltraT45.jpg', 'Stimuli/eUltraT46.jpg', 'Stimuli/eUltraT47.jpg', 'Stimuli/eUltraT48.jpg', 'Stimuli/eUltraT49.jpg', 'Stimuli/eUltraT50.jpg', 'Stimuli/eUltraT51.jpg', 'Stimuli/eUltraT52.jpg', 'Stimuli/eUltraT53.jpg', 'Stimuli/eUltraT54.jpg', 'Stimuli/eUltraT55.jpg', 'Stimuli/eUltraT56.jpg', 'Stimuli/eUltraT57.jpg', 'Stimuli/eUltraT58.jpg', 'Stimuli/eUltraT59.jpg', 'Stimuli/eUltraT60.jpg', 'Stimuli/eUltraT61.jpg', 'Stimuli/eUltraT62.jpg', 'Stimuli/eUltraT63.jpg', 'Stimuli/eUltraT64.jpg', 'Stimuli/eUltraT65.jpg', 'Stimuli/eUltraT66.jpg', 'Stimuli/eUltraT67.jpg', 'Stimuli/eUltraT68.jpg', 'Stimuli/eUltraT69.jpg', 'Stimuli/eUltraT70.jpg', 'Stimuli/eUltraT71.jpg', 'Stimuli/eUltraT72.jpg', 'Stimuli/eUltraT73.jpg', 'Stimuli/eUltraT74.jpg', 'Stimuli/eUltraT75.jpg', 'Stimuli/eUltraT76.jpg', 'Stimuli/eUltraT77.jpg', 'Stimuli/eUltraT78.jpg', 'Stimuli/eUltraT79.jpg', 'Stimuli/eUltraT80.jpg'];

// Pictures of models appear to the left or right side of a rectangle for 1250
// ms.  On half the trials the rectangular frame is not solid, but hatched,
// which is a signal for them to withhold their response.  Each of the 80
// average-weight women images and 80 ultra-thin women images are randomly
// selected.  Ultra-thin women are always paired with inhibition signals whereas
// average-weight eomen are never paired with inhibition signals.   Participants
// are asked to respond as quickly as possible.  c/m indicates if the photo is
// on left/right side.  Responses only made when the photo is in a solid
// rectangle  If the partcipant responds incorrectly (indicates the wrong side
// or responds to a photo in the hatched border) or if they do not make any
// response during the 1250 ms a red X will appear in the center of the screen
// for 500 ms.   Blank screen for 500 ms, no fixation cross  300 total 6 blocks
// (50 trials per block)

function l(x){console.log(x);}

function make_trial(image_source){
  var go = image_source.substring(9,10) == 'A';
  var correct_key = Math.floor(Math.random()*10)%2 ? 77 : 67;
  var side = (correct_key==77) ? 'left' : 'right';
  var style = go ? '5px solid #000' : '5px dashed #000';
  var html = "<img src='"+image_source+"' style='float:"+
              side+";padding-"+side+":500px;border:"+
              style+";'/>";

  return  {
            data : {
                    go : go,
                    correct_key : correct_key,
                  },
            html : html
          }
}

function getAverageResponseTime() {
  var trial_data = jsPsych.data.getTrialsOfType('single-stim');
  var sum_rt = 0;
  var valid_trial_count = 0;
  for (var i = 0; i < trial_data.length; i++) {
    if (trial_data[i].rt > -1) {
        sum_rt += trial_data[i].rt;
        valid_trial_count++;
    }
  }
  return Math.floor(sum_rt / valid_trial_count);
}

function getNumberCorrect(){
  var trial_data = jsPsych.data.getTrialsOfType('single-stim');
  return _.filter(trial_data, function(td){return td.go && (td.correct_key == td.key_press)}).length;
}

function getNumberGo(){
  var trial_data = jsPsych.data.getTrialsOfType('single-stim');
  return _.filter(trial_data, function(td){return td.go }).length;
}

function getNumberNoGo(){
  var trial_data = jsPsych.data.getTrialsOfType('single-stim');
  return _.filter(trial_data, function(td){return !td.go }).length;
}

function getNumberWrongSide(){
  var trial_data = jsPsych.data.getTrialsOfType('single-stim');
  return _.filter(trial_data, function(td){return td.key_press>-1&&td.go&&(td.correct_key!=td.key_press)}).length;
}

function getPercentCorrect(){
  var score = Math.floor( (getNumberCorrect()/getNumberGo())*100 )
  return score+'%'
}

// BLOCKS
var welcome_block = {
  type:"text",
  text:"<h2>Instructions</h2><p>During this game, you will see a series of pictures on the screen surrounded by a solid or a dashed border.</p><p>Your job is to press \"c\" if the image is on the left side of the screen and \"m\" if the image is on the right side of the screen.</p><p>Only press if there is a solid bar around the image!  If you see a dashed bar, do nothing and the next photo will appear shorty! </p><p>Do your best to respond as quickly and accurately as possible. Press any key to begin.</p>",
  is_html:true
}

var feedback = {
  type: "single-stim",
  stimuli: 'Stimuli/red_x.png',
  timing_response: 500,
  timing_post_trial: 500
}
var if_chunk = {
  chunk_type: 'if',
  timeline: [feedback],
  conditional_function: function() {
    // return true if the response to the trial was incorrect.
    var previous_trial = jsPsych.data.getLastTrialData();
    // key press on no go
    if(!previous_trial.go && previous_trial.key_press > -1){
      return true;
    }
    // no key press on go
    if(previous_trial.go && previous_trial.key_press==-1){
      return true;
    }
    // wrong side
    if( (previous_trial.correct_key != previous_trial.key_press) && previous_trial.go ){
      return true;
    }
    return false;
  }
}

var experiment = [];

experiment.push(welcome_block);


for (var j = 0; j < 6; j++) {
  var random_50 = jsPsych.randomization.repeat(stimuli_images, 1).slice(0,51);
  for (var i = 0; i < random_50.length; i++) {
    var t = make_trial(random_50[i]);
    var trial = {
      type: "single-stim",
      stimuli: t.html,
      data: t.data,
      is_html: true,
      choices: ['c','m'],
      timing_response: 1250,
      timing_post_trial: 500
    };
    var one_gonogo_trial = {
      chunk_type: 'linear',
      timeline: [trial,if_chunk]
    };
    experiment.push(one_gonogo_trial);
  };

  var score_block = {

      type:"text",
      text: function(){
        var percent_correct=getPercentCorrect();
        var avergage_rt=getAverageResponseTime();
        var number_correct=getNumberCorrect();
        return "<p>Let's take a look at how you're doing:</p><ul><li><strong># correct</strong> <span style='color:purple;'>"+
        number_correct+"</span></li><li><strong>% correct</strong> <span style='color:purple;'>"+
        percent_correct+"</span></li><li><strong>Average RT</strong> <span style='color:purple;'>"+
        avergage_rt+"ms</span></li></ul><p>Nice job! Let's see if you can respond even faster this time around! Press any key to continue.</p>";},
      is_html:true
  }
  experiment.push(score_block);
};


var last_block = {
    type:"text",
    text: function(){
      var percent_correct=getPercentCorrect();
      var avergage_rt=getAverageResponseTime();
      var number_correct=getNumberCorrect();
      return "<p>Great work! These are your totals for the game:</p><ul><li><strong># correct</strong> "+
      number_correct+"</li><li><strong>% correct</strong> "+
      percent_correct+"</li><li><strong>Average RT</strong> "+
      average_rt+"ms</li></ul><p>Congratulations on finishing Module 2!</p>";},
    is_html:true
  }
experiment.push(last_block);

jsPsych.preloadImages(stimuli_images, function(){ startExperiment(); });

function startExperiment(){
  jsPsych.init({
      experiment_structure: experiment,
      show_progress_bar: true
  });
}