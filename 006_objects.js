//Objects

//var empObject={};



//Can extract propoerties using square brackets
//
//object constructors 


//excercises

// var jane={
// 	name :"Jane",
// 	age  : 30,
// 	shows: "Friends",
// 	getName: function(){
// 				console.log(this.name);
// 			},
// 	getAge : function(){
// 				console.log(this.age);
// 			},
// 	getShows: function(){
// 				console.log(this.shows);
// 			},
	
// }

// jane.getName();
// jane.getAge();
// jane.getShows();


// var child=jane;
// console.log (child);
// child.Hobbies = "Legoland";
// console.log (child);

// var elizabeth={
// 	name :"Elizabeth",
// 	age  : 30,
// 	shows: ["Friends", "As time goes by", "Great British baking show"],
// 	birthday: function(){
// 		return this.age+1;
// 	}
// };

// console.log (elizabeth.birthday());

// var john={
// 	name :"John",
// 	age  : 30,
// 	shows: ["Friends", "Star Wars", "Are you being served?"],
// };

// var stacy={
// 	name  : "Stacy",
// 	age	  : 33,
// 	shows : ["Big Bang Theory","Geography today"],

// };

// var brenda={
// 	name  : "Brenda",
// 	age   : 25,
// 	shows : ["The News Hour","To the manor born"],
// };

// var charles={
// 	name  : "Charles",
// 	age   : 50,
// 	shows : ["Dancing with the stars","Meet the press"]

// };

function Person (name,age,shows){
	this.name=name;
	this.age=age;
	this.shows=shows;
	this.birthday=function(){
		return age=age+1;
	}
	this.compareShows=function(){
		for (i)
	}
}

var elizabeth=new Person("Elizabeth", 29, ["Friends", "As time goes by", "Great British baking show"]);
var john = new Person("John",30, ["Star Wars", "Friends", "Are you being served?"]);


console.log(elizabeth.birthday());
console.log(elizabeth.birthday());











