/**
 * Created by MyVyrus on 9/22/14.
 */


////Table size

var height = 70;
var width = 55;
var length = 90;


var table = function volume(a,b,c){

    tableVolume = a*b*c;
    return tableVolume;

}
var totalTable = table(height,width,length);
console.log("The table is " + totalTable+"cm");

if(totalTable>=500000){

    console.log("table is to big.")
}else if(totalTable<300000&&totalTable>500000){

    console.log("table is the correct size")
}else{
    console.log("you could get a bigger table");
}