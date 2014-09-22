/**
 * Created by MyVyrus on 9/22/14.
 */



//////////////Function
/*
var min = 180;
var max = 220;

var ranNum = randomizer(min,max);

function randomizer(mn,mx){

    var randomeNumber = Math.round(Math.random()*(mx-mn)+mn);
    return randomeNumber;

}

console.log(ranNum);

for (var i = 0; i<5; i++){

    console.log(randomizer(min,max));
}

*/

/*
///normal function

function functionName(parameters){

    //code to execute
    //return value
}

////anonymous function


var functionName = function(parameters){

    //code to execute
    //return value
}

functionName(arguments);

*/


/*
var base = 10;
var height = 20;
var a = triArea(base,height);

console.log(a);

function triArea(b,h){

    var area = .5*b*h;
    return area;

}

//anonymous function
var triangleA = function(b,h){

    var area = .5*b*h;
    return area

}
var anon = triangleA(base,height);
console.log(anon);

*/

/*
var testArray = ["apple", "banana", "peach", "pear"];

console.log(testArray.length);//number of items in array
console.log(testArray);//show all array

//add new item to the end of the array

testArray.push("carrot");
console.log(testArray);

testArray.pop();//removes last item in the array
console.log(testArray);
*/
var width = 10;
var height = 7;

function areaRectangle(a,b){

    area = a*b;
    return area;
}
var aRectangle = areaRectangle(width,height);

var parRectangle = function parimeterRectangle(w,h){

   var parimeter = 2*w+2*h;
    return parimeter;
}

var pRectangle = parRectangle(width,height);


console.log(aRectangle);
console.log(pRectangle);


































