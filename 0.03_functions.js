//Functions

/*

	function Name_of_Function(){
	
}
*/
//Declaring a function
/*
function greeting(){
	var name="Kay";
	console.log(name + "Hellooooo Vietnam!")
}

greeting();

var weather="rainy";

function todaysWeather(){
	console.log("today is a "+ weather +" day");
}

todaysWeather();

//void Function with parameters
//void funciton1
function shoes(brand){
	console.log("Man those " + brand + " are on fleek!");
}

shoes("Crocs");
//void function2 with multiple parameters
function add(num1,num2){
	console.log(num1+num2);
}
add(34 , 66);

//Functions that return data

function sum(num1, num2){
	return num1+num2;
}

sum(23,17); // The result will be created but not stored

console.log(sum(23, 17));

var asnwerToQUestion=sum(23, 17): //This wil store the result to ake it available to use in our code


//Write functions for multiplication, division, subrtraction and modulus

function subtract(num1,num2){
	return num1-num2;
}

function multiply(num1, num2){
	return num1*num2;
}

function add(num1, num2){
	return num1+num2;
}

function divide(num1,num2){
	return (num1/num2);
}

function modulus(num1, num2){
	return (num1%num2);
}

console.log(subtract(45,21));

var answerSubtract=subtract(45,21);
console.log (answerSubtract);
*/
//Challenge. Write a function with two strings as arguments. Concatenate the two strongs into one and print

//function testMessage (string1, string2){
// 	return string1+string2
// }

// var answerTestMessage= testMessage("John","Jane");

// console.log(answerTestMessage)

// console.log(testMessage("John ", " and Jane") +" are really awesome");

function myBills(water, power, phone){
	return water+power+phone;
}

console.log(myBills(65,123,82));


function mySodaBill(quantity,price,tax){
return quantity*price+(tax*(quantity*price));
}

console.log(mySodaBill(100,0.99,.07));

var sodaDues = mySodaBill(100,0.99,0.07);
console.log(sodaDues);

//Create a clculator function with three arguments two numbers and an operator
// execute function
// hint - use a conditional

	function calculator(num1,operator,num2){
		if (operator==="*") {
			return num1*num2;
		} else if(operator==="+"){
			return num1+num2;
		} else if(operator==="-"){
			return num1-num2;			
		} else if(operator==="/"){
			return num1/num2;
		} else if (operator==="%"){
			return num1%num2;
		} else{
			return"Please return a valid operator";
		}
	}

	console.log(calculator(20,"p",15));


































