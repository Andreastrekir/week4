//Instructions
//Ask the user for their age, and save the value to a variable.
//Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
//if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
//if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
//if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
//Call the function.
//Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.


//const number = '1234'.replace(/,/g, '');
//console.log(parseInt(number));

function checkDriverAge(age){
	if (age < 18) {
		alert( "Sorry, you are too young to drive this car. Powering off");
	} if(age == 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}  else if (age > 18){
		alert("You are old enough to drive, Powering On. Enjoy the ride!"); 
	}
}
alert (checkDriverAge(prompt("How old are you?", 20)));

//--------------------------------------------------------------------------->
//Instructions
//Create a function called checkNumber() that takes no parameter.
//In the function, loop through numbers from 0 to 100.
//Add an if/else block
//If the number is even, console.log "the number <number> is even"
//Else, console.log "the number <number> is odd"
//Call the function

function checkNumber(){
	console.log('${even} ${odd}');
}

for(let i = 0; i <=100; i++) {
	if (i === 0){
		console.log("i + is even");
	}
	else if (i % 2 === 0){
		console.log("i + is even");
	}
	else {
		console.log("i + is odd");
	}
}

function checkNumber()

// -------------------------------------------------------------------------->
//Exercise 4: Find The Numbers Divisible By 23
//Instructions
//Create a function call isDivisible() that takes no parameter.
//In the function, loop through numbers from 0 to 500.
//Console.log all the numbers divisible by 23.
//At the end, console.log the sum of all numbers divisible by 23.


function isDivisible(){
for (let i = 0; i<=500; i++) {
     if (i % 23 === 0) {
     	console.log(i)
     }
 } 	
 	
 	{sum  += i;
 	}
 
     console.log(sum); 


// --------------------------------------------------------------------------->
//Exercise 5 : Amazon Shopping
//Instructions
//Create a function called checkBasket().
//It should:
//prompt the user for an item
//let the user know if the item is in the basket
//Hint: Use the in keyword inside the conditional

//let amazonBasket = {
    //glasses: 1,
    //books: 2,
    //floss: 100
//}

var item = prompt ("What you want to add in the basket?");
function checkBasket(item){ 

var glasses = glasses;
var books = books;
var floss = floss;

if (item === glasses){
	alert(" This item is already in your basket");
} if (item === books){
	alert("This item is already in your basket");
} if (item === floss){
	alert ("This item is already in your basket");
} 
}







