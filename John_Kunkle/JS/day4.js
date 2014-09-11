/**
 * Created by MyVyrus on 9/10/14.
 */


var avengerNames = ["Ironman", "Captain America","Thor", "Hawkeye", "Parthenon"];
//call array
console.log(avengerNames);

//call item in array
console.log(avengerNames[0]);

//change an item in the array
avengerNames[0]= "Black Widow";
console.log(avengerNames[0]);
console.log(avengerNames);

//Find out length on an array
console.log(avengerNames.length);

/////////////Prompts//////////

//var name = prompt("What is your name");

//console.log(name);

//Calculate the area of rectangle
var width = prompt("What is the width of your rectangle");
var length = prompt("What is the length of your rectangle");

var area = width*length;

console.log(area);
alert(area);
//Casting

var areaCode = prompt("what is your area code");
var phoneNumber = prompt("what is your phone number without area code");

var wholePhoneNumber = String(areaCode) + String(phoneNumber);
console.log(wholePhoneNumber);