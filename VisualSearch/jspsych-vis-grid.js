/**
 * Nathan Nichols
 * March 2015
 *
 *
 */

(function( $ ) {
    jsPsych["vis-grid"] = (function(){

        var plugin = {};

        plugin.create = function(params) {

            var trials = new Array(params.images.length);
            for(var i = 0; i < trials.length; i++)
            {
                trials[i] = {
                    "type":"vis-grid",
                    "images":params.images,     // array of strings
                    "correct":params.correct,   // integer (index)
                    "height":params.height,     // integer value
                    "width":params.width,       // integer value
                    "data":(typeof params.data === 'undefined') ? {} : params.data[i]

                };
            }
            return trials;
        };

        plugin.trial = function(display_element, trial) {
            // code for running the trial goes here

            // allow variables as functions
            // this allows any trial variable to be specified as a function
            // that will be evaluated when the trial runs. this allows users
            // to dynamically adjust the contents of a trial as a result
            // of other trials, among other uses. you can leave this out,
            // but in general it should be included
            trial = jsPsych.pluginAPI.normalizeTrialVariables(trial);

            // We will save rt, correct in here
            var trial_data = {
                type: trial.type
            }

            // reverse images
            console.log(trial);

            // mark them up
            var td_imgs = [];
            for (var i = trial.images.length - 1; i >= 0; i--) {
                td_imgs.push("<td><img id='"+i+"' src='"+trial.images[i]+"'></td>");
            }

            console.log(td_imgs);
            // build a table and display it
            var image_table = '<table>';
            for (var i = 0; i < trial.height; i++) {
                image_table+='<tr>';
                for (var k = 0; k < trial.width; k++) {
                    image_table+=td_imgs.pop();
                } image_table+='</tr>';
            } image_table+='</table>';
            display_element.append(image_table);

            // start the timer and handle click events.
            var start_time = (new Date()).getTime();

            var handler = $('img').on('click', function(){
                trial_data.rt = (new Date()).getTime() - start_time;
                var selected = parseInt($(this).attr('id'));
                if(trial.correct === selected){
                    trial_data.correct = true;
                } else {
                    trial_data.correct = false;
                }
                trial.selected = selected;
                handler.off();

                jsPsych.finishTrial();
            });

            function save_data(correct, rt, selected) {
                jsPsych.data.write($.extend({}, {
                    "rt": rt,
                    "correct": correct,
                    "selected": selected
                }, trial.data));
            }
        };

        return plugin;
    })();
}) (jQuery);