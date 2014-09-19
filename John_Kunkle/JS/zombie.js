/**
 * Created by MyVyrus on 9/17/14.
 */
//Zombies

var days = 8;
var numZombie = 1;
var numBites = 4;

// loops dictates the number of times you want to run a section of code
//place what you want to run inside the loop
for(var i=1; i<=days; i++){

    var newZombies = numZombie*numBites;// start with original zombie times bites
    numZombie = numZombie+newZombies// number of zombies is original + new
    console.log("there are "+ numZombie + (" zombies on day ")+ i)

}


