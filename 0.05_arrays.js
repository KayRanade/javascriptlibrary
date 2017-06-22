//Arrays

// []

var students=["Harrison","Rose","Ben","Caitlyn", "Kay"];

console.log(students[3]);

students[5]="Nick";

console.log(students);

students.push("Aron");
console.log(students);

students.pop();
console.log(students);

students.sort();
console.log(students);

//for each loop
for (var s in students){
	console.log(students[s] + " is in the position of "+ s);
}

//create an array of numbers 1 to 10. Use a for in loop to print it to console.

var numbers=[1,2,3,4,5,6,7,8,9,10];

for (var rank in numbers){
	console.log("This is position "+ numbers[rank])
}

// creating a for loop that pushes numbers to an array














