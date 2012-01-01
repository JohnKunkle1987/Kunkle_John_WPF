/**
 * Created by MyVyrus on 9/24/14.
 */


var rCircle = prompt("Give me the Radius of the circle please");

while(isNaN(rCircle) || rCircle=== ""){

    rCircle = prompt("You can't fool me")
}

function areaCircle(r){

    var area = 2*r*Math.PI;
    return area;
}
areaCircle(rCircle);

console.log("The area for the circle is " + areaCircle(rCircle));