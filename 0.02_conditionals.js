//consitionals
/* Boolean operators
>
<
>=
<=
== Equal to
=== Strictly equalto
! Not
!= Not equal to

chaining boolean expression
---------------------------
&& and
|| or

*/

console.log(1>3);
console.log(10!=10);
var name="Kay";
console.log(name=="kay");
 console.log(6=="6");
 console.log(6==="6");


 /*if statements

 if (Boolean expression){
    // some code goes here
 }
 */

 if (242%2===0){
 	console.log("this number is even");
 }

var userName="dragon";
var password="admin";

if(userName==="admin" && password==="admin"){
	console.log("you have been granted access");
} else if(userName=="admin"){
	console.log("Incorrect password");
}
	else {
		console.log("The username is incorrect");
	}

/*if statements

 if (Boolean expression){
    // some code goes here
 } else if (boolean expression){
	//some code goes here
 }else{
 
 }
 */

var age=20;

if (age>=35){
	console.log("you can vote and also hold any place in government");
}else if(age>=25){
	console.log ("You can vote and run for senate");

} else if (age>=18){
	console.log("you can vote")
} else {
	console.log("you are out of luck!");
}














