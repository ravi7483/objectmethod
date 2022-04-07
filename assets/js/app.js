console.log("app.js file");

// first class function

var cl = console.log;

var person = {
	fname : "jhon",
	lname: "doe",
	profile : "Mean Stack",
	place : "puna",
	age : 73,
	CanDrive : true,
	
	fullName : function(){
		return person.fname + " " + person.lname;
	},
	child :{
	fname : "tony",
	lname: "stark",
	profile : "Mean Stack",
	place : "puna",
	age : 45,
	CanDrive : true,
	fullName : function (){
		return person.child.fname + " " + person.child.lname; 
	},
	
	grandchild : {
	fname : "vikas",
	lname: "biradar",
	profile : "M.sc chemistry",
	place : "Nanded",
	age : 25,
	CanDrive : true,
	fullName : function(){
		return person.child.grandchild.fname + " " + person.child.grandchild.lname;
	}
	},
	}
};

// method >> function within the objection
// property >> when we store any datatype other than function in a object key

var getFullName = person.fullName();
console.log(getFullName);

var getChildFullName = person.child.fullName();
cl(getChildFullName);

var getGrandChildFullName = person.child.grandchild.fullName();
cl(getGrandChildFullName);

