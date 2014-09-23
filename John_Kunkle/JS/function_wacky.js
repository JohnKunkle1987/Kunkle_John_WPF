/**
 * Created by MyVyrus on 9/22/14.
 */

var chairs = 8;
var tables = 10;


function chairTotal(a,b){

  var totalChairs = a*b;
  return totalChairs;
}

var chairNum = chairTotal(chairs,tables);
console.log(("There are ")+ chairNum +" in the room");