/**
 * Created by MyVyrus on 9/22/14.
 */

var chairs = 8;
var tables = 10;
//setting the var for chairs and tables
//setting the function to chair total
function chairTotal(a,b){

  var totalChairs = a*b;
  return totalChairs;
}
//logging the function as the var i set
var chairNum = chairTotal(chairs,tables);
console.log(("There are ")+ chairNum +" chairs in the room");