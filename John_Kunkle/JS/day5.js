/**
 * Created by MyVyrus on 9/12/14.
 */

//////////////////////////////conditionals Logical and relation operators.

//Basic conditional


/*

var oldEnough = true;
//if the child is old enough hey can ride!!
if(oldEnough){
    //If oldEnough is true then you can ride
    //If oldEnough is false then you can't ride.
    console.log("You can ride!!")
}


//Relation expression
// If the kid is tall enough, then they can ride.
// The kid must be > 48 in to ride

var kidHeight = 50;
// Kids height
var minHeight = 48;
//minimal height to ride.
if(kidHeight>=minHeight){
    // if the kid is tall than or equal to the min height they can ride.
    console.log("You can ride!!!");
}

*/
/*

//Conditional with an expression
var kidHeight = 46;
//set  kid height

var minHeight = 48;
//min height

var sneakerLift = 2;
//shoe lift

//Tall enough to ride with or without shoes

//if kid is taller then min height with shoes they can ride
//if not they can not
if(kidHeight + sneakerLift>= minHeight){

    console.log("you are tall enough with shoes on");

}

*/
/*

//If else statement
//choosing between two blocks of code

var kidHeight = 45;

var minHeight = 48;

if(kidHeight>=minHeight){
    //if statement is true they can ride
    console.log("you can ride");

}else{
    // if false then you can't ride
    console.log("You can not ride you are too short");
}

*/

/*
//Else if choosing 3 or more blocks of code.

var kidHeight = 40

var minHeight = 48

var wParentHeight = 45
//Kid height to ride with parent

//if taller than the min height, you can ride
//if shorter than min height but with parent you can ride
//requirment you can ride
//you are too shor you cant ride

if(kidHeight>=minHeight){

    console.log("You can ride");
}else if(kidHeight>= wParentHeight){
    //with parent and tall enough
    console.log("You can ride with your parent");
}else{

    console.log("Go home");
}
*/


///////////////////////////////BROKEN MUST FIX
//Logical operators
var budget = 300;
var iPadPrice = 499.99;
var payCheck = 500;


// if the price of the phone is less then our budget

if(iPadPrice < budget){

    console.log("we can buy the iPad");
}else if(payCheck > 600){
//and if our pay check is over 600
    console.log("we can not afford the iPad");
}else{

    console.log("you can buy the iPad");
}


//if the price of the phone is less than our budget

//or operator - either must be true to be true
var wonLottery = true;

if(iPadPrice < budget || wonLottery){
    //You can buy iPad
    console.log("you can buy iPad")
}else{

    console.log("You cannot buy an iPad")
}

//////////Ternary Conitionals
/*
var gpa = 48;
//if gpa is over the min 2.0 score thwn student can graduate.

if(gpa > 2.0){

    console.log("you can graduate");
}else{
    console.log("you cannot graduate");
}

//(condition to be met) ? first set of stuff : else stuff

(gpa > 2.0)?console.log("You can graduate"):console.log("You cannot graduate")
*/