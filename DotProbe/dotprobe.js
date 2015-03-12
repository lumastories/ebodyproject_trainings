// Each of the 80 average-weight women images will be randomly paipurple with one of
// the 80 ultra-thin women images (side by side) for 500 ms.  Immediately
// Immediately after the images disappear, a small dot probe appears in the
// location of one of the images.  The probe appears in the location occupied by an
// ultra-thin woman 10% of the time and in the location occupied by an average
// weight woman 90% of the time  Participants are asked to respond as quickly as
// possible.  c/m indicates if the dot is on left/right side.  Dot remains until a
// response is made  They do not receive feedback.  As soon as a response is made,
// the paradigm moves to the next fixation cross Each trial is preceded by a
// fixation cross for 500 ms 320 trials: Each of the 80 picture pairs will be
// presented 4 times, with each picture presented twice on each side of the screen.
// 8 blocks (40 trials per block)

'use strict';
var stim_average = ['Stimuli/eAverage1.jpg', 'Stimuli/eAverage2.jpg', 'Stimuli/eAverage3.jpg', 'Stimuli/eAverage4.jpg', 'Stimuli/eAverage5.jpg', 'Stimuli/eAverage6.jpg', 'Stimuli/eAverage7.jpg', 'Stimuli/eAverage8.jpg', 'Stimuli/eAverage9.jpg', 'Stimuli/eAverage10.jpg', 'Stimuli/eAverage11.jpg', 'Stimuli/eAverage12.jpg', 'Stimuli/eAverage13.jpg', 'Stimuli/eAverage14.jpg', 'Stimuli/eAverage15.jpg', 'Stimuli/eAverage16.jpg', 'Stimuli/eAverage17.jpg', 'Stimuli/eAverage18.jpg', 'Stimuli/eAverage19.jpg', 'Stimuli/eAverage20.jpg', 'Stimuli/eAverage21.jpg', 'Stimuli/eAverage22.jpg', 'Stimuli/eAverage23.jpg', 'Stimuli/eAverage24.jpg', 'Stimuli/eAverage25.jpg', 'Stimuli/eAverage26.jpg', 'Stimuli/eAverage27.jpeg', 'Stimuli/eAverage28.jpg', 'Stimuli/eAverage29.jpg', 'Stimuli/eAverage30.jpg', 'Stimuli/eAverage31.jpg', 'Stimuli/eAverage32.jpg', 'Stimuli/eAverage33.jpg', 'Stimuli/eAverage34.jpg', 'Stimuli/eAverage35.jpg', 'Stimuli/eAverage36.jpg', 'Stimuli/eAverage37.jpg', 'Stimuli/eAverage38.jpg', 'Stimuli/eAverage39.jpg', 'Stimuli/eAverage40.jpg', 'Stimuli/eAverage41.jpg', 'Stimuli/eAverage42.jpg', 'Stimuli/eAverage43.jpg', 'Stimuli/eAverage44.jpg', 'Stimuli/eAverage45.jpg', 'Stimuli/eAverage46.jpg', 'Stimuli/eAverage47.jpg', 'Stimuli/eAverage48.jpg', 'Stimuli/eAverage49.jpg', 'Stimuli/eAverage50.jpg', 'Stimuli/eAverage51.jpg', 'Stimuli/eAverage52.jpg', 'Stimuli/eAverage53.jpg', 'Stimuli/eAverage54.jpg', 'Stimuli/eAverage55.jpg', 'Stimuli/eAverage56.jpg', 'Stimuli/eAverage57.jpg', 'Stimuli/eAverage58.jpg', 'Stimuli/eAverage59.jpg', 'Stimuli/eAverage60.jpg', 'Stimuli/eAverage61.jpg', 'Stimuli/eAverage62.jpg', 'Stimuli/eAverage63.jpg', 'Stimuli/eAverage64.jpg', 'Stimuli/eAverage65.jpg', 'Stimuli/eAverage66.jpg', 'Stimuli/eAverage67.jpg', 'Stimuli/eAverage68.jpg', 'Stimuli/eAverage69.jpg', 'Stimuli/eAverage70.jpg', 'Stimuli/eAverage71.jpg', 'Stimuli/eAverage72.jpg', 'Stimuli/eAverage73.jpg', 'Stimuli/eAverage74.jpg', 'Stimuli/eAverage75.jpg', 'Stimuli/eAverage76.jpg', 'Stimuli/eAverage77.jpg', 'Stimuli/eAverage78.jpg', 'Stimuli/eAverage79.jpg', 'Stimuli/eAverage80.jpg'];
var stim_ultra = ['Stimuli/eUltraT1.jpg', 'Stimuli/eUltraT2.jpg', 'Stimuli/eUltraT3.jpg', 'Stimuli/eUltraT4.jpg', 'Stimuli/eUltraT5.jpg', 'Stimuli/eUltraT6.jpg', 'Stimuli/eUltraT7.jpg', 'Stimuli/eUltraT8.jpg', 'Stimuli/eUltraT9.jpg', 'Stimuli/eUltraT10.jpg', 'Stimuli/eUltraT11.jpg', 'Stimuli/eUltraT12.jpg', 'Stimuli/eUltraT13.jpg', 'Stimuli/eUltraT14.jpg', 'Stimuli/eUltraT15.jpg', 'Stimuli/eUltraT16.jpg', 'Stimuli/eUltraT17.jpg', 'Stimuli/eUltraT18.jpg', 'Stimuli/eUltraT19.jpg', 'Stimuli/eUltraT20.jpg', 'Stimuli/eUltraT21.jpg', 'Stimuli/eUltraT22.jpg', 'Stimuli/eUltraT23.jpg', 'Stimuli/eUltraT24.jpg', 'Stimuli/eUltraT25.jpg', 'Stimuli/eUltraT26.jpg', 'Stimuli/eUltraT27.jpg', 'Stimuli/eUltraT28.jpg', 'Stimuli/eUltraT29.jpg', 'Stimuli/eUltraT30.JPG', 'Stimuli/eUltraT31.jpg', 'Stimuli/eUltraT32.jpg', 'Stimuli/eUltraT33.jpg', 'Stimuli/eUltraT34.jpg', 'Stimuli/eUltraT35.jpg', 'Stimuli/eUltraT36.jpg', 'Stimuli/eUltraT37.jpg', 'Stimuli/eUltraT38.jpg', 'Stimuli/eUltraT39.jpg', 'Stimuli/eUltraT40.jpg', 'Stimuli/eUltraT41.jpg', 'Stimuli/eUltraT42.jpg', 'Stimuli/eUltraT43.jpg', 'Stimuli/eUltraT44.jpeg', 'Stimuli/eUltraT45.jpg', 'Stimuli/eUltraT46.jpg', 'Stimuli/eUltraT47.jpg', 'Stimuli/eUltraT48.jpg', 'Stimuli/eUltraT49.jpg', 'Stimuli/eUltraT50.jpg', 'Stimuli/eUltraT51.jpg', 'Stimuli/eUltraT52.jpg', 'Stimuli/eUltraT53.jpg', 'Stimuli/eUltraT54.jpg', 'Stimuli/eUltraT55.jpg', 'Stimuli/eUltraT56.jpg', 'Stimuli/eUltraT57.jpg', 'Stimuli/eUltraT58.jpg', 'Stimuli/eUltraT59.jpg', 'Stimuli/eUltraT60.jpg', 'Stimuli/eUltraT61.jpg', 'Stimuli/eUltraT62.jpg', 'Stimuli/eUltraT63.jpg', 'Stimuli/eUltraT64.jpg', 'Stimuli/eUltraT65.jpg', 'Stimuli/eUltraT66.jpg', 'Stimuli/eUltraT67.jpg', 'Stimuli/eUltraT68.jpg', 'Stimuli/eUltraT69.jpg', 'Stimuli/eUltraT70.jpg', 'Stimuli/eUltraT71.jpg', 'Stimuli/eUltraT72.jpg', 'Stimuli/eUltraT73.jpg', 'Stimuli/eUltraT74.jpg', 'Stimuli/eUltraT75.jpg', 'Stimuli/eUltraT76.jpg', 'Stimuli/eUltraT77.jpg', 'Stimuli/eUltraT78.jpg', 'Stimuli/eUltraT79.jpg', 'Stimuli/eUltraT80.jpg'];
var stimuli_images = [];
stimuli_images.push(stim_ultra);
stimuli_images.push(stim_average);
function l(x){console.log(x);}

function getAverageResponseTime() {
  var trial_data = jsPsych.data.getTrialsOfType('same-different');
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

function getPercentCorrect(){
  var trial_data = jsPsych.data.getTrialsOfType('same-different');
  var num_correct = _.filter(trial_data,function(el){return el.correct}).length
  return Math.floor(100*(num_correct/trial_data.length));
}

function getTotalCorrect(){
  var trial_data = jsPsych.data.getTrialsOfType('same-different');
  var num_correct = _.filter(trial_data,function(el){return el.correct}).length
  return num_correct+'/'+trial_data.length
}

function buildTable(left,right){
  return "<table><tr><td>"+left+"</td><td>"+right+"</td></tr></table>";
}

function averageOnRight(image_pair){
  var right_side = true;
  if (image_pair[1].slice(9,10)=='A'){
    right_side = true;
  } else {
    right_side = false;
  }
  if(chance10()){
    right_side = !right_side;
  }
  return right_side;
}

function chance10(){
  // This returns true 10% of the time.
  return (Math.floor(Math.random()*10)%10)==1?true:false;
}

function flip(arr){
  return [arr[1], arr[0]];
}

// BLOCKS
var welcome_block = {
  type:"text",
  text:"<h3>Instructions</h3> <p>In this game, you will see two pictures on the screen. The pictures will disappear and a dot will replace one of the two photos. </p> <p>Your job is to press the \"c\" if the dot appears behind the left photograph or \"m\" if the dot appears behind the right photograph.</p> <p>Do your best to respond as quickly and accurately as possible.</p><p>Press any key to begin</p>",
  is_html:true
}

var results_block = {
    type:"text",
    text:function(){

      return "<p>Let's take a look at how you're doing:</p> <ul> <li><strong># correct</strong> <span style='color:purple;'>"+
      getTotalCorrect()+"</span></li> <li><strong>% correct</strong> <span style='color:purple;'>"+
      getPercentCorrect()+"%</span></li> <li><strong>Average RT</strong> <span style='color:purple;'>"+
      getAverageResponseTime()+"ms</span></li> </ul> <p>Nice job!  Let's see if you can respond even faster this time around!</p><p>Press any key to continue</p>";
    },
    is_html:true
}

var last_block = {
    type:"text",
    text:function(){

      return "<p>Great work! These are your totals for the game:</p> <ul> <li><strong># correct</strong> <span style='color:purple;'>"+
      getTotalCorrect()+"</span></li> <li><strong>% correct</strong> <span style='color:purple;'>"+
      getPercentCorrect()+"%</span></li> <li><strong>Average RT</strong> <span style='color:purple;'>"+
      getAverageResponseTime()+"ms</span></li> </ul> <p>Congratulations on finishing Module 3!</p>";
    },
    is_html:true
}
var experiment = [];
experiment.push(welcome_block);

// Build stimuli and add to experiment
var diptics = _.shuffle(_.zip(_.shuffle(stim_ultra),_.shuffle(stim_average)));
var all_diptics = [];
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < diptics.length; j++) {
    var a_stim=i%2?diptics[j]:flip(diptics[j]);
    all_diptics.push(a_stim);
  }
}

var diptic_blocks = [ all_diptics.slice(0,40),
                      all_diptics.slice(40,80),
                      all_diptics.slice(80,120),
                      all_diptics.slice(120,160),
                      all_diptics.slice(160,200),
                      all_diptics.slice(200,240),
                      all_diptics.slice(240,280),
                      all_diptics.slice(280,320) ]
var answer = '';
for (var k = 0; k < diptic_blocks.length; k++) {
  for (var i = 0; i < diptic_blocks[k].length; i++) {
    var dot_html = '';
    if (averageOnRight(diptic_blocks[k][i])){
      dot_html = buildTable("","<span style='font-size:4em;'>&#9679;</span>");
      answer = 'different';
    } else {
      dot_html = buildTable("<span style='font-size:4em;'>&#9679;</span>","");
      answer = 'same';
    }

    var fixation_cross_block = {
      type: 'single-stim',
      stimuli: "<center><p style='font-size:6em; padding-top:150px;'>&nbsp;+</p></center>",
      is_html:true,
      timing_response: 500,
      timing_post_trial: 0}

    var a_trial_block = {
      type:'same-different',
      stimuli:[[buildTable("<img src='"+diptic_blocks[k][i][0]+"'>",
                                              "<img src='"+diptic_blocks[k][i][1]+"'>"),
                                              dot_html]],
      answer:[answer],
      same_key:67,
      different_key:77,
      is_html:true,
      timing_first_stim:500,
      timing_gap:5,
      timing_second_stim:-1}

    experiment.push(fixation_cross_block);
    experiment.push(a_trial_block);
  }
  experiment.push(results_block);
}


experiment.push(last_block);
jsPsych.preloadImages(stimuli_images, function(){ startExperiment(); });

function startExperiment(){
  jsPsych.init({
      experiment_structure: experiment,
      show_progress_bar: true
  });
}