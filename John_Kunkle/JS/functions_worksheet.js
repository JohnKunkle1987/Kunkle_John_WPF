/**
 * Created by MyVyrus on 9/19/14.
 */

//setting function name as circle with argument as r
function circle(r){

    var circumference = 2*3.14*r;
//made var in the function for circumference that will complete the math.
    return circumference;
// returning circumference


}
var x = circle(2);
//x to be the return of function
console.log("The circumference of this circle is " + x);
//logging the function as a var


//////////////////////

//setting function name as beeStings and the argument as w
function beeStings(w){
// set var strings with my equation
    var stings = 8.666666667*w;

    return stings
// using return for stings so i can use it in a var

}
var x = beeStings(193);
//taking my return for stings and setting it to var x
console.log("It takes " + x +" bee stings to kill this animal");
// logging function as a var