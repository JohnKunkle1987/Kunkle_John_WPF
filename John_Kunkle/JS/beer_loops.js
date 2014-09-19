/**
 * Created by MyVyrus on 9/17/14.
 */

//loops
/////////////Bottles of beer
// for (intialization ,  condition incremant of change

for(i=99; i>0; i--){


    console.log(i+" bottles of beer on the wall "+ i + " bottles of beer")
    //console.log("take one down, pass it around" + i-- + "bottles of beer on the wall")
    if(i===1){

        console.log("Take one down, pass it around. No more bottles of beer! The End")
    }else
    console.log("Take on down pass it around" + (i-1) + "bottles of beer on the wall")
}




