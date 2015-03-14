/**
 * jspsych-visual-search-grid
 * plugin for displaying a collection of clickable images in a grid
 * Nathan Nichols
 *
 * documentation: Coming soon...
 */

(function($) {
    jsPsych['visual-search-grid'] = (function() {

        var plugin = {};

        plugin.create = function(params) {

            //params = jsPsych.pluginAPI.enforceArray(params, ['data']);

            var trials = new Array(params.stimuli.length);
            for (var i = 0; i < trials.length; i++) {
                trials[i] = {
                    "images": params.stimuli[i],          // array of images to display
                    "correct_index": params.correct_index,// wich is the correct image?
                    "grid_height": params.grid_height,
                    "grid_width": params.grid_width,
                    "timing_post_trial": (typeof params.timing_post_trial === 'undefined') ? 1000 : params.timing_post_trial,
                    "prompt_location": params.prompt_location || "above"
                };
            }
            return trials;
        };

        plugin.trial = function(display_element, trial) {

            // if any trial variables are functions
            // this evaluates the function and replaces
            // it with the output of the function
            trial = jsPsych.pluginAPI.normalizeTrialVariables(trial);

            var start_time = (new Date()).getTime();

            var html_table = table_grid(trial.images, trial.correct_index,
                              trial.grid_width, trial.grid_height);

            $("#jspsych-visual-search-grid-arena").append($(html_table));

            $('img').on('click', function(){
                var end_time = (new Date()).getTime();
                var rt = end_time - start_time;
                var selection = event.target;
                jsPsych.data.write($.extend({}, {
                    "selection": JSON.stringify(coordinates),
                    "rt": rt
                }, trial.data));
                // advance to next part
                display_element.html("");
                if (trial.timing_post_trial > 0) {
                    setTimeout(function() {
                        jsPsych.finishTrial();
                    }, trial.timing_post_trial);
                }
                else {
                    jsPsych.finishTrial();
                }
              }
            });
        };

        // helper functions

        function random_coordinate(max_width, max_height) {
            var rnd_x = Math.floor(Math.random() * (max_width - 1));
            var rnd_y = Math.floor(Math.random() * (max_height - 1));

            return {
                x: rnd_x,
                y: rnd_y
            };
        }

        function table_grid(images, correct_index, width, height){
          var html_table = '<table>';
          var id = '';
          var clas = '';
          var img_index_counter = 0;
          for (var i = 0; i < height; i++) {
            html_table += '<tr>';
            for (var k = 0; k < width; k++) {
              id = i+','+k;
              clas = correct_index==img_index_counter ? 'correct':'';
              html_table += "<td id='"+id+"'><img class='"+clas+"' src='"
                            +images[img_index_counter]+"' /></td>";
              img_index_counter++;
            }
            html_table += '</tr>';
          }
          html_table += '</table>';

          return html_table;
        }

        return plugin;
    })();
})(jQuery);
