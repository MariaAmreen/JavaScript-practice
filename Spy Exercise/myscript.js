var Fname = prompt("What is Your First Name?");
var Lname = prompt("What is Your Last Name?");
var age = prompt("how old are you?");
var Height = prompt("What is your Height in Centimeters?");
var pet = prompt("What is your Pet Name?");
alert("Thank tou so much for the information!");

if(Fname[0] ===  Lname[0] && age >= 20 && age <= 30 && Height >= 170 && pet[pet.length-1] === "y")
{
	console.log("Welcome Spy!");
}
else{
	console.log("Nothing to see here");
}