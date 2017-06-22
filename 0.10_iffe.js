/* 

iffe = immendiate invoked Function expression
semi colons important
*/

(function printNum(){
	var a=5;
	console.log(a);
})();

// compare with a regular function (not an iffe) that needs to be called (type example here).

function myFunction(p1, p2) {
    return p1 * p2;              
}
console.log (myFunction(2,3)); 
// The function returns the product of p1 and p2 
// The function needs to be called
// Create an iffe that counts from 1 - 10

( function numbers(){
	for(i=0; i<11; i++){
	console.log(i);
}
})();

// challenge: fix errors in this code and make it run

// var smartCar = {;
var totalMiles=250;
var totalGallons= 10;
var smartCarMPG = function(totalMiles, totalGallons){
	return totalMiles/totalGallons
};
console.log(smartCarMPG);

// smartCar.mpg = smartCarMPG(____, 15);
// consoLe.log(smartCar.mpg);
// console.Log(smartCar._____.calculateMpg());

var smartCar = {};
var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg : function(){
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(390, 15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());



