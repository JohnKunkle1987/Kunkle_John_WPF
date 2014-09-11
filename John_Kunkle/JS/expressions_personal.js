/**
 * Created by MyVyrus on 9/10/14.
 */
// John Kunkle 9/10/14 WPF

//reps for chest+tri workout at the gym on thursday


var muscleGroups = prompt("How many muscle groups are you going to workout?");
//assigning var to the answer of the prompt
var exercises = prompt ("How many exercises are you going to do for each muscle?");
//assigning var to the answer of the prompt
var sets = prompt("How many sets of each exercise?");
//more prompts for var
var reps = prompt("How many reps are you going to do for each");
//assigning reps to the question of how many reps they plan on doing
console.log("You will complete "+muscleGroups*exercises*sets*reps+" reps at the gym");
//taking all the answers(var) and multiplying them
