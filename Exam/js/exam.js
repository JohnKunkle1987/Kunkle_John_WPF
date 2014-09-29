/**
 * Created by MyVyrus on 12/31/11.
 */

var itemCost = prompt("What is the cost of the item?");

while(isNaN(itemCost)||itemCost===""){

    var itemCost = prompt("You need to enter the cost of the item");
}

var discount1 = prompt("Enter the discount you have for that item");

while(isNaN(discount1)||itemCost===""){

    var discount1 = prompt("You still need to enter a valid number");
}
while(discount1<0||discount1>100){

    var discount1 = prompt("Your number should be between 0 and 100");
}

function item(cost,discount){

    var totalDiscount = cost*(discount/100);
    var price = cost-totalDiscount
    return price
}
var priceWithDiscount = item(itemCost,discount1);

console.log( "With your "+itemCost+"$ item and discount of "+ discount1 +"% your total is " + priceWithDiscount)+"$";
