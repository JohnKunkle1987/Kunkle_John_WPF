/**
 * Created by MyVyrus on 9/10/14.
 */
// John Kunkle 9/10/14
//bandwidth for running movies
var numberOfscrens = ("How many videos do you want to run?");
//Asking for the number of videos that will be run and assigning a var
var vidQuality = prompt("What video quality do you want to run?");
//Asking for the quality of video through a prompt
alert("You need "numberOfscrens*vidQuality/210+" Mbps to run that quality." );
//taking the prompt info as a var and giving the answer as an alert.
