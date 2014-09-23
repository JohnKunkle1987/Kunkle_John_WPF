/**
 * Created by MyVyrus on 9/22/14.
 */


////Table size

//setting vars
var height = 70;
var width = 55;
var length = 90;

//using anon function with name of table
var table = function (a,b,c){

    var tableVolume = a*b*c;
    return tableVolume;
//returning table volume to be used later
}
//setting totalTable the returned value with the var parameters
var totalTable = table(height,width,length);
console.log("The table is " + totalTable+" squared cm");
//starting if statement to see if the table will suit my needs
if(totalTable>=500000){

    console.log("table is to big.")
}else if(totalTable<300000&&totalTable>500000){

    console.log("table is the correct size")
}else{
    console.log("you could get a bigger table");
}