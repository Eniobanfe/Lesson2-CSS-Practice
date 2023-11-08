/* 
 A farmer has a farm located at Epe in Lagos. The farm is 2000sqm in length an 3000sqm in width. He has 50 chickens, 10 goats, and 2 fish ponds.

 1. Determine the Area of the farm in square
 2. Output the address of the farm including the town.
 3. Create an Object that models the farm.

 Tips: 
 1. Use appropiate variables
 2. Model the farm using an Object and output it to console.

 let obj = {
    prop1: value1,
    prop2: value2
 }

 4. Output a story using the farm object properties
*/

/*let farmArea;
let farmLength = 2000;
let farmWidth = 3000;

farmArea = farmLength * farmWidth;
console.log(farmArea + "sqm");

let streetAddress = "4, farmland land";
let city = "Epe";
let state = "Lagos";

let address = streetAddress + " " + city + " " + state + ".";

console.log(address);

let farm = {
	lengthOfFarm: farmLength,
	widthOfFarm: farmWidth,
	numOfChickens: 50,
	numOfGoats: 10,
	numOfFishPonds: 2,
	addressOfFarm: address,
};

console.log(farm);

let story =
	"A farmer has a farm located at " +
	farm.addressOfFarm +
	" The farm is " +
	farm.lengthOfFarm +
	"sqm in length and " +
	farm.widthOfFarm +
	"sqm in width. He has " +
	farm.numOfChickens +
	" chickens, " +
	farm.numOfGoats +
	" goats, and " +
	farm.numOfFishPonds +
	" fish ponds.";

console.log(story);

/* 
Constructing Strings with varaibles

The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.

Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/

let numOfChildren = 4;
let partnersName = "Funke";
let myLocation = "Lagos Nigeria";
let jobTitle = "Software Developer";

let output = "";

output =
	"You will be a " +
	jobTitle +
	" in " +
	myLocation +
	", and married to " +
	partnersName +
	" with " +
	numOfChildren +
	" kids.";

console.log(output);
/* 
	Arithmetic Operators 
	1. Plus Operator +
	2. Subtraction Operator -
	3. Multiplication Operator *
	4. Division Operator /
	5. Remainder Operator %
	6. Addition Compound Assignment Operator +=
	7. Subtraction Compound Assignment Operator -=
	8. Multiplication Compound Assignment Operator *=
	9. Division Compound Assignment Operator /=
*/

/* Basic mathematical operators */
console.log(45 + 2); // 47
console.log(45 - 2); // 43
console.log(45 / 5); // 9
console.log(45 * 2); // 90
console.log(45 / 0); // Infinity
console.log(5 % 2); // 1

/* Compound Assignment operators */
let a = 3;
let b = 15;
let c = 12;

// Add 10 to each of the variables
a = a + 10;
b = b + 10;
c = c + 10;
console.log(a, b, c);
a += 10;
b += 10;
c += 10;
console.log(a, b, c);
/* 
	Excercise 1 
	Use the Subtraction, Multiplication and Division 
	Compound Assignment Operators to add, subtract and divide each variable by 5
*/

a -= 5;
b -= 5;
c -= 5;

console.log(a, b, c);
a *= 5;
b *= 5;
c *= 5;

console.log(a, b, c);
a /= 5;
b /= 5;
c /= 5;

console.log(a, b, c);

/* Concatenating strings with the Plus Equals operator += */

let ourString = "This is a House with ";
let description = " blue gate, with white painting and brown roof";
let owner = " owned by Babajide";

output = "";

output += ourString;
output += description;
output += owner + ".";

console.log(output);

/* Note 
Everything in JavaScript is an object, and every object has properties and methods. Therefore to find the length of a string for example we use the 'length' property of the string*/

let lengthOfStr = output.length;
console.log(lengthOfStr); //-> 86 includes the spaces in between.

/* Find the Nth chracter of a string using the bracket notation

Note
Generally JavaScript indexes start at 0 NOT 1. What this implies is that counting starts from zero(0). Therefore to access the first letter of a string we would use the index zero(0). 
*/

let firstCharacterOfStr = output[0];
console.log("The first character is " + firstCharacterOfStr + " at index 0");
console.log("The first character is " + "Hello World"[0] + " at index 0");

/* Excercise 
Extract the 3rd character of the string "Lorem Ipsum Envato Redismuc Satos" */

console.log(
	"The third character is " +
		"Lorem Ipsum Envato Redismuc Satos"[2] +
		" at index 2"
);

console.log(
	"The eight character is " +
		"Lorem Ipsum Envato Redismuc Satos"[7] +
		" at index 7"
);

/* Find the last character of a string using the bracket notation */
ourString = "Lorem Ipsum Envato Redismuc Satos";
console.log(ourString[ourString.length - 1]); //-> s

ourString = "Ibe";
/* Example Usage using a 'while loop' */
let endOfString = ourString.length - 1;
let i = 0;
while (i <= endOfString) {
	// Do something
	console.log(ourString[i]);
	i++;
}

/* Assignment 
	Word Blanks.

	Fill in the blanks

	It was really ____, and we ____ ourselves ____

	Build this sentence using concatenation and the plus or Plus Equals operator.
	
	Find the value of the eigth character
  
	Dynamically add a full stop to the end of the string.

*/

let spaceOne = "a great day";
let spaceTwo = "enjoyed";
let spaceThree = "so much";


output = ""; 

output = "It was realy " + spaceOne + ", " + "and we " + spaceTwo + " ourselves " + spaceThree + ".";

console.log(output)

console.log(output [7]);


const prayingCountries =[
	["Afghanistan", 96],
	["Nigeria", 95],
	["Algeria", 88],
	["Senegal", 88],
	["Djibouti", 87]
]

console.table(prayingCountries);

const firstValue = prayingCountries [0]
console.log (firstValue)

const lastValue = prayingCountries [prayingCountries.length-1]
console.log (lastValue)


const  favTeamsAndPositionInLeague = [
	["ManU", 1],
	["Chelsea", 2],
	["Mancity", 3]
]

console.table (favTeamsAndPositionInLeague);

/*To change Chelsea to number 1*/
favTeamsAndPositionInLeague[1]= ["Chelsea",4];
console.log(favTeamsAndPositionInLeague)

favTeamsAndPositionInLeague[1][1] = 4;

console.log(favTeamsAndPositionInLeague);

/*To put Arsenal in 1*/

/* Create a shopping list in the variable "shoppingList". 
	1) The list should be a multi-dimensional array containing several sub-arrays. 
	2) The first element in each sub-array should contain a string with the name of the item, the second element should be the quantity.
	3) The shopping list should contain at least five sub-arrays
	4) Remove the last item in your shopping list that wasn't in the shop and replace it with this item that was available in the shop ["Chocolate", 5];
	5) Th*/ 


	




/*Functions 
We can divide our codes into reusable parts call functions, it allows you divide your code into reuseable parts called functions. You declare a function using the function "keyword" followed by the name of the function, then parenthesis and curly braces.*/


/*
function functionName() 
{
console.log ("hello World")}


console.log(functionName);

/*for the function to work, you have to call or invoke the function using its name followed by parenthesis.*/

/*functionName();

/*all the code within the curly braces will be executed every time the function is called*/

/*functionName() ;




/* Exercise 
	1. Create a function which prints out the string "Hi Babajide" to the dev console.
	2. Call the function twice.
*/

 function Ikini() {
console.log("hi Babajide");
}

Ikini(); //call the function or invoke
Ikini();

/*omce you declare a variable, you can redeclare it again, but the function allow you reuse it*/

function Igbimo () {
	let firstName = "Kemi"
	let sName = "Oginni"
	console.log("hi  " + firstName + " " + sName);
}

Igbimo();
Igbimo();


/* Function Augument: Functions accept paramenters. These parameters are variables that act as place holders for the values that are to be input to a function
When a function is defined, it is defined along with one or more paramenters.
The actual values that are input (parsed) into the function when it is called or invoked are called arguements*/
/*
function testfn(param1, param2)
{
	console.log(param1, param2);
}

testfn("Hello", "world");*/
/* 
	Exercise 
	1. Create a function called fnWithArgs. 
	2. The function should accept two arguments.
	3. It should output the sum of the arguments to console.
	4. Call or invoke the function with two numbers as arguments 
*/
function fnWithArgs(a1, a2){
	console.log(a1 + a2);
}

fnWithArgs(50, 100);
fnWithArgs(17, 3);


/*function totalBill(amount, tip){
	console.log(amount + tip);
}

totalBill(500, 50);
totalBill(2000,80);*/


function plusFour(num) {return num + 4;
}
/*notice that we passed a function to the method. A method is another function that is of the console object. (The log is a function it is the property object of console)  Functions are senior citizens*/
console.log(plusFour(6)); //->10
console.log (plusFour(15))
/*we can also assign the return value of a function to a variable */

const answerThis = plusFour(10);
console.log(answerThis);

/*Function Scopes
In JS, Scope  refers to the visibility of variables.Variables which are defined outside a function block ( block is whatever is between the open curly braces), they are not inside the function...they have a global scope. 
This means that they can be seen, are vicible everywhere in your code.

Variables which are declared without let or const key words are automatically created in global scope, but it can create an unitended consequences elsewhere in your code or when invoking a function. e.g creating vat as 7.5% then putting another with var vat at 5%, the 5% will overun the first one.

In other to avoid this issue, you should ALWAYS 

1. declare your variables using let or const key words. (these ones can not be redclared)




Va*/




/*Globa-local Function Scope */

let VAT = 7.5;

VAT = 5.0;

console.log (VAT)

/*Using let or const declare a global  variable  myGlobal outside of any function and initialize it with a value of 100*/

let myGlobal = 100;

console.log(myGlobal)

/*Inside the function fn1 assign 5 to heyGlobal WITHOUT using the var, or let or const keywords. */



function fn1() {
	heyGlobal = 5;
	}

heyGlobal = 7;//oops WARNING global variable!!!

console.log(heyGlobal);


/*Local Scope - Variables which are declared within a function as well as function parameters have local scope. It means they are vicible ONLY within that function */

function testIt(){
	const temp = "high";
	console.log(temp); //temp has local scope
}

testIt();

/*Dont use var again */

/*exercise. Declare a local variable called myLocal inside of the function */

function myLocalScope(){
	let mylocal = "street";
	console.log(mylocal);
}

myLocalScope();
/* if you test this 
console.log(mylocal);
it should give a refence error*/

function calcTip(percentTip, amount){
	return amount * (percentTip / 100);

}

const myTip = calcTip(5, 200);
console.log("Your tip is " + myTip +  " naira");


/**booleans, conditionals, loops */


/* LOGIG 21/10/2023

Logic is the sysmatic and structured reasoning that programmers use to design algorithm and soft wares
It involves writing a series of instructions that the computer understands, follows to achieve a specific task or solve a problem. It can be expreseed using programming constructs such as conditionals, booloeans, loops, comparison, mathematical operators and 

The purpose of logic is to control the flow of a program and to make decisions based on data

Good programming logic ensures that a program behaves as intended and produces the desired output

Boolean: 

it is a data type. It takes only two values, true or false only. Its like a switch, can either be off or on only. It is mutually exclusive meaning it is either this or that. In JS you do not write booleans in quotes. If you do this "true", "false" they have no meaning except that they are strings.*/

/* NOTE In JS there are 6 (six) faulty values, i.e values that evaluates to false when coerced to boolean.
1. false
2. 0 (zero)
3. Empty string "" or ''
4. null
5. undefined
6. NaN (not a number)*/ 

function welcomeToRestaurant(){
	return false;
}

const greetStatus = welcomeToRestaurant();
console.log(greetStatus)

/*Conditional Logic in Javascript. This is expressed using the construct of if statements the keyword in this case is <if> and it tells JS to execute code inside the curly braces under certain conditions defined in the parenthesis. Theses conditions areknown as boolean conditions and may only true or false

if(condtion is true) {
	execute statement}*/

	function testAnything(myCondition){
		if(myCondition) {return "it is true";}
		return "it is false";
	}
	console.log(testAnything(true));
	console.log(testAnything(false));
/*Exercise create a function called trueorfalse, that returns the string "yes, its ture and no its false*/
	function trueOrFalse(didKemiLaugh) {
    	if(didKemiLaugh) 
		{return "yes its true";}
		return "no its false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

/*Comparative operators

   1 Equality (==)
   2 Strict equality (===)
   3 Greater than (>)
   4 inequality (!=)
   5 strict inequality (!==)
   6 Greater than or equal to (>=)
   7 Less than (<)
   8 less than or equal to (<=)
   9 Logical And (&&)
   10 logical or ()
	At the end of the day all the logical operators will evaluate to a boolean.

	There is subtle difference between equality or inequality and strict equality or inequality test for value only. How ever strict equality 




	In order for Js to comare values of different data types, it tries to convert one type to the other. This is called type coersion. Once it does the conversion, it now makes the comparison
	*/

	

	function checkIfAvailable(color) {
		const colors = ["red", "green", "orange", "blue", "yellow"]
		/*console.log(olors.includes(color));*/
		if(colors.includes(color)){
			return "yes," + color + "is available";
		}
		return "No, " + color + "is NOT available";
	}
    let isColorAvailable = '';
	isColorAvailable = checkIfAvailable("red");
	
	isColorAvailable= checkIfAvailable("mint");

	console.log(isColorAvailable);


//Example 2 - Equality/
function isEqualTo(val) {
	if (val == 10){
		return "Equal";
		return "Not Equal";
	}
}

let result = '';
result = isEqualTo(10);
console.log(result);

result = isEqualTo("10");
console.log(result); //the result is equal there due to type coersion


function isStrictlyEqualTo(val) {
	if (val === 10){
		return "Equal";
		return "Not Equal";
	}
}

/* 
Assignment 
Demonstrate the comparison operators using a functions that return "Equal" if true or "Not Equal" if false
*/

function amountLeft(amount){
	if (amount >= 500)
		{return "Equal";}
		return "Not Equal";
}

change = amountLeft(600);
console.log(change);

change = amountLeft(499);
console.log(change);


/*Example of Logical AND Operator
used in cases when you want to try more than one thing at a time.

Sometimes you want to test two things at the same time or more than one thing at a time. Logical AND operator returns true only if the operants on the left and the right of it evaluate to true.

So if true && //-> true however false && true //-> false*/



/*The above can be written like this */
let num = 5;
if (num >2 && num <8 ) {
	console.log ("Yes");
}


/*Class work :Replace the following nested if statements with a logical AND operator*/
/*function testLogical(val) {
	if (val <=3) {
		if (val< 7) {
			return "yes";
		}
	}
	return "No";
}
console.log(testLogicalAND(4));
console.log(testLogicalAND(2));*/

function testLogicalAND(val) {
	if (val >= 3 && val < 7) 
	{return "Yes";}
      return "No"
}

console.log(testLogicalAND(4));
console.log(testLogicalAND(2));
console.log(testLogicalAND(1));

/*Logical OR operator
Sometimes you want to test more than one thing at atime, The Logical OR operator returns true ONLY if either of the operands on the left and right of it evaluate to true.*/

num = 10;
if (num > 10) {
	console.log("No") ;
}
if (num < 5) {
	console.log("No") ;
}
console.log("No") ;


num = 3
if (num > 14 || num < 5) {
	console.log("No");
}

/*Class work: */
function testLogicalOR(val) {
if (val>15) {
	return "outside";
}
	if (val<10) {
	return "outside";
}
return "inside"
}

console.log(testLogicalOR(15));


/*Every data type with the exception of faukty values always return true? 0 is off 1 is on. Any string will always evaluate to true, any digit will always evaluate to true. However, an empty string quote will evaluate to false, so will undefined.....*/

function testLogicalOR(val) {
	if (val > 15 || val <= 10) 
	{return "outside";}
	  return "inside"
}

console.log(testLogicalOR(15));
console.log(testLogicalOR(10));


/* Else Statement
We know that when an if statement is true,the block of code following it is executed. What happens if the condition is false?Normally nothing happens, however with an else statement we can execute an alternate block of code */

if (num > 12) {
	console.log ("Bigger than 12");
} else { console.log ("12 or less");
}


/* Class work: Combine the multiple if statements into a single if else statement
function elseTest(val) {
let r = "";
if (val > 4) {
	r = "Bigger than 4"
}
if (val <= 4){
	r = "4 or smaller"
}

console.log(r);
} */

function elseTest(val) {
	let r = ""; 
if (val > 4 ) {r = "Bigger than 4";
} else {
	r = "4 or Smaller";
}
console.log (r);
}
 elseTest(3);
 elseTest(6);
 
/*
Else If statement If you need to evaluate multiple conditions them you chain if statements together with the elseif statemet*/
num =2;

if (num > 20) {
	console.log("Bigger than 20");
} else if (num <10) {
	console.log("smaller than 10");
} else {
	console.log("between 10 and 20");
}


/*
classwork: convert the logic of the following code to use the else if statement.
*/

	/*function testElseIf(val) {
	if (val >= 15) {
		return "Greater than or equal to 15";
	}
	if (val < 5) {
		return "smaller than 5";
	}
	return "between 5 and 15";
}
*/

function testElseIf(val) {
	if (val >= 15) {
		return "Greater than or equal to 15";
	} else if (val < 5) {
		return "smaller than 5";
	} else {
		return "between 5 and 15";
	}
}

console.log(testElseIf(15));
console.log(testElseIf(8));
console.log(testElseIf(4));

/*if (condition 1) {
		statement 1
	} else if(condition 2) {
		statement 2
	} else if (condition 3) {
		statement 3
		.....
	} else {
		statement N
	}*/

	/*num < 5 //-> Tiny
	num < 10 //-> Small
	num < 15 //-> Medium
	num < 20 //-> Large
	num >= 20 //-> Huge*/


	function testMySize(num) {
	if (num < 5) {
		return("Tiny")
	} else if(num < 10) {
		return("Small")
	}
     else if (num < 15) {
		return("Medium")
	} else if (num < 20) 
	   {  return("Large")
	} else if (num >= 20) {
		return("Huge")
	} else { return ("Too big")
	}
  }
	console.log(testMySize(0));
	console.log(testMySize(4));
	console.log(testMySize(5));
	console.log(testMySize(8));
	console.log(testMySize(10));
	console.log(testMySize(15));
	console.log(testMySize(18));
	console.log(testMySize(20));
	console.log(testMySize(25));
	

	/*Switch Case
	
	JS will execute code in each case block until it encounters a break statement*/

	
let flavour = "chocolate" /*later replace it with vanilla and strawberry and see the answer it gives you */
switch (flavour) {
	case "strawberry": 
	console.log("I love strawberry");
	break;
   case "vanilla":
	console.log("I love vanilla");
	break;
	default:
	console.log("i dont like that flavour")
}

let r ="";
function myWinningNums(num) {
switch (num) {
	case 1:
	case 2:
	case 3: 
		r ="1, or 2, or 3";
		break;
	case 4:
		r = "4 is alone";
}
}

myWinningNums(1);
console.log (r);
myWinningNums(2);
console.log (r);
myWinningNums(3);
console.log (r);
myWinningNums(4);
console.log (r);


/*Assignment wrtie a function called show range which takes a number as parameter.

Use a switch statement to return the appropriate range the number belongs based on the following conditions

1-3 (output low as a string) //-> low
4-6 //->Mid
7-9 //-> Fine

Test cases
showRange(1); low
showRange(2); low
showRange(3); low
showRange(4); mid
showRange(5); mid
showRange(6); mid
showRange(7); high
showRange(8); high
showRange(9); high
*/



function showRange(num) {
	switch (num) {
		case 1:
		case 2:
		case 3:
			return ("low");
		case 4:
		case 5:
		case 6:
			return ("Mid");
		case 7:
		case 8:
		case 9:
		    return ("High");
		
	}
}
console.log(showRange(1));
console.log(showRange(2));
console.log(showRange(3));
console.log(showRange(4));
console.log(showRange(5));
console.log(showRange(6));
console.log(showRange(7));
console.log(showRange(8));
console.log(showRange(9));




/*

	Assignment 2 
	Change the following if/else if statements to a switch statement.*/
	
	   /*function changeToSwitch(arg) {
		   let result = "";
		   if (arg = "dupe") {
			   result = "She is beautiful"
		   } else if (arg <= 20) {
			   result = "You're too young";
		   } else if (arg === "address") {
			   result = "I don't live here"
		   } else if (arg > 20) {
				result = "You're old enough "
		   } else if (arg > 80) {
			   result = "Sir, You're a distinguished elder statesman"
		   } else {
			   result = "I don't understand your request"
		   }
   
		   return result;
	   
   
	   console.log(changeToSwitch(21));
	   console.log(changeToSwitch(16)); }*/


	   function changeToSwitch(arg){
		   switch (arg){
			case "dupe":
				return ("she is beautiful");
				break;
			case "<=20":
			return ("you are too young");
				break;
			case "===address":
				return ("I dont live here");
				break;
			case ">20":
				return ("You are old enough");
				break;
			case ">80":
				return ("Sir, you are an elder state man");
				break;
			default:
			return ("i dont understand your request")
		   }
	   }
	   
	console.log(changeToSwitch("21"));
	  console.log(changeToSwitch("dupe"));
	  console.log(changeToSwitch("<=20"));
	  console.log(changeToSwitch("===address"))
	  console.log(changeToSwitch(">20"));
	  console.log(changeToSwitch(">80"));
	  console.log(changeToSwitch("hello"));
	  
	  

/*27th October, 2023

Objects aresimilar to arrays with the exception that instead of using indexes to modify or assess data you do this by using objects via properties
objects are useful for storing data in a structured form and most importantly they can represent or model real world objects like a car. 
 */
/*Creating Objects*/
const car = {
	"brand": "Toyota",
	"doors": 5,
	"engine": "v4",
	"colour": "silver",
	"gear":["auto","manual"]
};

/*if your object does not have String, JS will coerce it inot a String. Note that the properties will always be string*/

const someObj ={
	"make":"benz",
	4:"four",
	"model": "XLE",
	};

console.log(someObj);

/*Exercise: Create an object that models a dog with the following properties..name, legs, */

const dog ={
	"name": "rex",
	"legs": 2,
	"tail": 1,
	"breed": "german sherperd",
	"friends":["jack", "misper", "voltron"]
};
console.table(dog)

/*Accessing Objects Properties
There are 2 ways to access object properties in JS


1. Dot notation .When to use dot notation: it is used when you know the name of the property you want to access(BEFORE HAND)*/


const FormularTwo = {
"formation lap": 2,
"black flag" : 1,
"chicane":10,
}

let drive = FormularTwo.chicane;
console.log(drive);

/*2. Bracket notation [] is used when you arenot sure of the name of the property or when the name has spaces like below
*//*example using bracket notation*/

const FormularOne = {
"formation lap": 2,
"black flag" : 1,
"chicane":10,
}

/*to access it using bracket*/
let prop = FormularOne["formation lap"];
console.log(prop);
/*You can access object propeties with variables. You will use bracket notation to access it
Example*/

/*example using the dot notation*/

const flag = "black flag";
const driverTwo = FormularOne[flag]; //Note that we did not use quote around the flag

console.log(driverTwo);

/*Exercise using the lagos fc object below, access the player property using the bracket notation
player numbers are 10, 22, 16 and 4 log the value to console*/


const LagosFC = {
	12: "Papi",
	10:"Wilfred",
	16: "Saka",
};

let playerNum = 22;
console.log(LagosFC[playerNum]);
playerNum = 10;
console.log(LagosFC[playerNum]);
playerNum = 16;
console.log(LagosFC[playerNum]);
playerNum = 14;
console.log(LagosFC[playerNum]);

/*

or playerId = LagosFC[10];
console.log(playerId);

playerId = LagosFC[22];
console.log(playerId);

playerId = LagosFC[16];
console.log(playerId);

playerId = LagosFC[4];
console.log(playerId);*/


/*Working with objects*/

const employee ={
	name: "Babajide",
	role: "software Developer",
	department: "IT",
};
/*assuming my employee role has changed to snr software developer */


employee.role="snr software Developer";
console.log (employee);

/*adding new property to an object */

//assuming we want to track employee performance
/*Use the dot notation when you are so sure, but when in doubt use bracket notation*/
employee["employee performance"] = 85;
console.log(employee)

/*deleting a property*/

//delete the employee performance property

delete employee["employee performance"];
console.log(employee);

/*looking up objects (like look up in excel*/

const blogArticle = {
title:	"How to create objects",
link: "https://example.com/how-to-create-objects.html",
author: "Babajide",
tags: ["technology", "javascripts"],
created: "Nov 23, 2023"
}

const articleAuthor = blogArticle.author;
const articleLink = blogArticle["link"];
console.log(articleAuthor);
console.log(articleLink);

const val = "title";

//look up the value of variable  in the blog article*/

const valLookup = blogArticle[val];
console.log(valLookup);

/*this simply means that we can replace multiple chains of switch and ifelse with object lookups*/

/* class work assignment*/
function colorLookup(color) {
    let hexCode = "";
//only change code below this line
	switch (color) {
		case "white":
			hexCode ="ffffff"
			break;
        case "black":
			hexCode = "#000000";
			break;
		case "blue":
		  hexCode = "#0000FF";
				break;
		case "red":
			hexCode = "#FF0000";
			break;
		case "green":
			hexCode = "#008000";
				break;
			default:
			hexCode = "unavailable"
	}
	//only change code above this line
	return hexCode;
}
console.log(colorLookup("blue"));
console.log(colorLookup("black"));
console.log(colorLookup("yellow"));

/*refactor the above code into an object
use it to look up color and assign the associated strings to the hexcode variable*/

function lookUpColor(color) {
	let hexCode = "";

	const lookUpColor = {
		white:"ffffff",
		black:"#000000",
		blue:"#0000FF",
		red:"#FF0000",
		green:"#008000",
		default:"unavailable",
	}
}

console.log(lookUpColor)
console.log(colorLookup("blue"));
console.log(colorLookup("black"));
console.log(colorLookup("yellow"));

/*const showBlue = lookUpColor.blue
console.log(showBlue);

const showBlack= lookUpColor["black"]
console.log(showBlack);

const showYellow = lookUpColor["yellow"]
console.log(showYellow);

console.log(lookUpColor)
/*you can do it like this too

console.log(lookUpColor)
console.log(colorLookup("blue"));
console.log(colorLookup("black"));
console.log(colorLookup("yellow")); */

function colorLookup(color) {
	let hexCode = "";

	const lookupColor = {
		white:"ffffff",
		black:"#000000",
		blue:"#0000FF",
		red:"#FF0000",
		green:"#008000",
	};
	hexCode = lookupColor[color];
	if (hexCode === undefined) {
		hexCode = "Unavailable";
	}
}

console.log(lookUpColor);
console.log(lookUpColor["blue"]);
console.log(colorLookup("black"));
console.log(colorLookup("yellow"));

/* 01/11/2023
Testing for Object Property
Your data sources might not be what you created yourself. So you do not trust any data coming from external.

You can test it using the objects hasOwnProperty() method*/

function checkSizeCodes(code){
	const sizeCode ={
		s:"small",
		m:"medium",
		l:"large",
		xl:"extra large",
		xxl: "double extra large",
		xxx: "tripple extra large"

	};
	if (checkSizeCodes.hasOwnProperty(code)){
		console.log(checkSizeCodes[code]);
	} else {
		console.log("Not found");
	}
	return checkSizeCodes.hasOwnProperty(code);
}
console.log(checkSizeCodes("s"));
console.log(checkSizeCodes("xs"));

/*Working with complex and nested objects*/

const musicalAlbumCollection = [
	{
	artist: "Asake",
	title: "work of art",
	releaseYear: 2023,
	formats: ["CD", "MP4"],
	"total plays": 540388818,
	genre: "Afrobeats",
},
{
	artist: "Rema",
	title: "Ravage",
	releaseYear: 2023,
	formats: ["CD", "MP4"],
	"total plays": 2706613,
	genre: "Afrobeats",
},
];


musicalAlbumCollection.push( {
	artist: "Olamide",
	title: "Unruly",
	releaseYear: 2023,
	formats: ["CD", "MP4"],
	"total plays": 37970022,
	genre: "Afrobeats",
});

console.table(musicalAlbumCollection)

/*Accessing nested objects*/

const officeStorage = {
   desk: {
	drawer: "Stationery",
   },
   cabinet:{
	"top drawer":{
		folder1: "file",
		folder2: "secrets",
	},
	"bottom drawer": "Biscuits"
   }
};

const contentFolder2 = officeStorage.cabinet["top drawer"].folder2;

console.log(contentFolder2);


const carStorage = {
	inside: {
		"glove box": "vehicle Particulars",
		"door compartment": "lolipop"
	},
	outside: {
		trunk: "jack"
	}
};

const gloveBoxContent = carStorage.inside["glove box"];
console.log(gloveBoxContent)



const myPets = [ {
	type: "cats",
	names: ["Carrie", "kolo", "kitty"],
	"fav food": null,
},
   {
	type : "dog",
	names : "Buster",
	"fav food":["Beef", "watermelon"],
	breed: "Doberman"
   }
];

console.log(myPets[0].names[2]);
console.log(myPets[1]["fav food"][0])



/*const myGarden = [
	{
		plant: "flowers",
		list: ["rose", "....."],
	},
	{
		plant: "trees",
		list: ["pine", "....."],
	},
];*/

const myGarden = [
	{
	plants: "flowers",
	list: ["rose", "hibiscus", "cauliflower"],
},
{
	plants: "trees",
	list:["pine", "iroko", "guava"],
},
];

console.table(myGarden);
const secondPlant = myGarden.plants
console.log(secondPlant);

/* 
	Assignment(compulsory) - CD Collection 

	Create a function that helps in the maintenance of a music CD Collection. Organize the collection as an object that contains multiple CDs which are also objects. Each CD must have a unique id as property name to identify it.Within each CD there are various properties describing information about the CD. Not all CDs have complete information.




	DATA
	--------------------------------------------------
	|id	 | cdTitle     | artist  | tracks 			   
	--------------------------------------------------
	|234 | Unruly      | Olamide | 'Gaza','Jinja'  
	--------------------------------------------------
	--------------------------------------------------
	|254 | Savage      | Rema    | 'DND','Red potion' 
	--------------------------------------------------
	--------------------------------------------------
	|264 | Work Of Art | Asake   | ['2:30']               
	--------------------------------------------------
	--------------------------------------------------
	|284 | I Told Them |         |
	--------------------------------------------------

	A) Based on the Data above create and complete the CD Collection Object. It will be used for the tests
	*/
const cdCollection = {
	234: {
		cdTitle: "Unruly",
		artist: "Olamide",
		tracks: ["Gaza", "Jinja"],
	},
	254: {
		cdTitle: "Savage",
		artist: "Rhema",
		tracks: ["DND", "Red potion"],
	},
	264: {
		cdTitle: "Work Of Art",
		artist: "Asake",
		tracks: ["2:30"],
	},
	284: {
		cdTitle: "I Told Them",
	},
};
/*
	B) Create an updateCollection function which 
	takes 4 arguments represented by the following 
	parameters:

	CDs - an object containing several individual CD
	id - a unique number representing a specific CD object
	prop - a string representing the name of the CD property 
	to update
	value - the string containing information used to update 
	the CD's property

	Complete the function using the following rules to update the object passed to the object

	1. Your function must always return the entire CD collection
	2. if value is an empty string, delete the given prop property 
	from the album  
	3. If prop isn't tracks and value isn't an empty string, 
	assign the value to that CD's prop
	4. If the prop is tracks and value isn't an empty string,
	then update the CD tracks array. 
	5. If the CD does not have a tracks property,
	assign it an empty array, then add the value as the last 
	item in the CD's tracks array.

*/
function updateCollection(collection, id, prop, value) {
	// Add your code here
	if (value === "" && cdCollection[id].hasOwnProperty(prop)) {
		delete cdCollection[id][prop];
	}

	if (prop !== "tracks" && value !== "") {
		cdCollection[id][prop] = value;
	}

	if (cdCollection[id].hasOwnProperty("tracks") === false && value !== "") {
		cdCollection[id]["tracks"] = [];
		cdCollection[id]["tracks"].push(value);
	} else if (
		cdCollection[id].hasOwnProperty("tracks") === true &&
		prop !== "cdTitle" &&
		value !== ""
	) {
		cdCollection[id]["tracks"].push(value);
	}

	if (cdCollection[id].hasOwnProperty("tracks") === false) {
		cdCollection[id]["tracks"] = value;
	}

	return collection;
}

/* 
 	Tests 
	- DO NOT modify the cdCollections Object used for the tests.
	- After calling the updateCollection with the following 
	parameters the following is the expected outputs
 */
console.log(updateCollection(cdCollection, 284, "artist", "Burna Boy")); //-> artist should be the string Burna Boy
console.log(updateCollection(cdCollection, 284, "tracks", "City Boys")); //-> tracks should have the string City Boys as the last and only element of the tracks array.
console.log(updateCollection(cdCollection, 234, "artist", "")); //-> artist should not be set
console.log(updateCollection(cdCollection, 264, "tracks", "Sunshine")); //-> tracks should have the string Sunshine as the last element of the tracks array.
console.log(updateCollection(cdCollection, 254, "tracks", "Trouble Maker")); //-> tracks should have a length of 3 and string DND as the first element of the tracks array.
console.log(updateCollection(cdCollection, 234, "tracks", "")); //-> tracks should not be set
console.log(updateCollection(cdCollection, 254, "cdTitle", "Ravage")); //-> cdTitle should be the string Ravage

/* 
JavaScript Loops
 Loops - Are language constructs that allow you to run the SAME code multiple times.
*/

/* 
	While Loop - The While loop runs while a specific condition is true. It stops once that condition is no longer true. i.e when the condition becomes false.

	while (condition is true) {
		Execute Statements
	}

	Note: Warning!!! Using the while loop may result in an infinite loop if the condition will never become false. ex
	
	while (true) { // This condition will NEVER be false. Hence Infinite Loop.
		// Execute statement
s	}
*/
let z = 0;
while (z < 5) {
	console.log(z);
	z++;
}

// Exercise - Add the numbers 5 through 0(inclusive) in descending order to an Array called range5 using a while loop. //-> [5, 4, 3, 2, 1, 0];

const range5 = [];
let n = 5;

while (n >= 0) {
	range5.push(n);
	n--;
}

console.log(range5);

/* 
	For Loop - A for loop can also execute code multiple times. However a for loop runs only for a specific number of times.

	For loops are usually declared with three optional expressions separated by semicolons;

	for (a; b; c) {
		// Statements
	}

	where 
	a - initialization statement
	b - condition statement
	c - final expression

	The initialization statement is executed once before the start of the loop and is typically used to define and setup the loop variable

	The condition statement is evaluated at the beginning of every loop iteration and will continue as long as the condition is true. When condition is false at the start of iteration, the loop stop executing. This implies that if the condition starts at false, the loop will never execute. 

	The final expression is executed at the end of every iteration, but before the next condition check and it is usually used to decrement or increment the loop counter
*/

const rangeOf5 = [];

for (let i = 0; i < 5; i++) {
	rangeOf5.push(i);
}
console.log(rangeOf5);

//Exercise - Use a for loop to push values 1 through 5 onto myArray //-> [1, 2, 3, 4, 5]

const myArray = [];
for (let i = 1; i <= 5; i++) {
	myArray.push(i);
}
console.log(myArray);

// Exercise A - Use a for loop to push even numbers between 0 and 10 into an array called evenNumbers.

const evenNumbers = [];

// Add your code here
for (let i = 0; i < 10; i += 2) {
	evenNumbers.push(i);
}

console.log(evenNumbers); //-> [0, 2, 4, 8]

// Exercise B - Use a for loop to push even numbers between 1 and 9 into an array called oddNumbers.

const oddNumbers = [];

// Add your code here
for (let i = 1; i < 10; i += 2) {
	oddNumbers.push(i);
}
console.log(oddNumbers); //-> [1, 3, 5, 7, 9]

//Exercise C - Use a for loop to push even numbers from 10 to 2 into an array called reversedEvenNumbers

const reversedEvenNumbers = [];

// Add your code here
for (let i = 10; i > 0; i -= 2) {
	reversedEvenNumbers.push(i);
}
console.log(reversedEvenNumbers); //-> [10, 8, 6, 4, 2]

/* 
	Iterating Arrays with For Loops
	
	It's common to iterate through an array using a for loop. This is done by using the length property of an array in the condition statement. 

	Remember that arrays are zero-based indexing, so the last index of the array is arr.length - 1.

*/
// Example
const arr = [8, 7, 6, 5, 4];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// Exercise D - Use a For loop to find the sum of the numbers in the given array and store the sum in a variable called total.

const myNumbers = [2, 4, 6, 8, 10];

let total = 0;

// Add your code below this line
for (let i = 0; i < myNumbers.length; i++) {
	total += myNumbers[i];
}
console.log(total); //-> 30

/* 
	Iterating through multi-dimensional arrays using Nested For Loops 
	
	You can iterate through multi-dimensional arrays using nested for loops. Here's an example
*/

// Example
const md_arr = [
	[1, 2],
	[3, 4],
	[5, 6],
];

const md_arr_flat = [];
// Loops through the parent array
for (let i = 0; i < md_arr.length; i++) {
	//Loops through the sub-arrays
	for (let j = 0; j < md_arr[j].length; j++) {
		md_arr_flat.push(md_arr[i][j]);
	}
}

console.log(md_arr_flat); //-> [1, 2, 3, 4, 5, 6]

/* Exercise - Create a function called multiplyAllPrices that returns the product of all numbers in the sub-arrays of the prices array
 */

function multiplyAllPrices(arrOfPrices) {
	let product = 1;

	//Add your code below here
	for (let i = 0; i < arrOfPrices.length; i++) {
		for (let j = 0; j < arrOfPrices[i].length; j++) {
			product *= arrOfPrices[i][j];
		}
	}

	return product;
}

//Test
console.log(
	multiplyAllPrices([
		[1.99, 2.99],
		[3.99, 4.99],
		[1.99, 2.78],
		[4.5, 5.5],
	])
); //-> 16,220.744427306

/* 
	Do While Loop is similar to the while loop
	with on exception. The loop will first do one pass of the code inside of the loop, no what matter what, and the continue to run the while loop as long as the specified condition is true. 

	 let i = 0; // Initialization statement
	do {
		// Statements
		i++ //increment or decrement of final expression
	} while (condition is true)
*/

// Example - push numbers 1 to 5 inside the array called arrayOfFive

const arrayOfFive = [];

let p = 1;

do {
	arrayOfFive.push(p);
	p++;
} while (p <= 5);

console.log(arrayOfFive);

/* 
Assignment Customer Profile Lookup 

A flourishing Restaurant in Lagos keeps a record of customer profile data and their food preferences in a simple excel file called customers.xls.

You have hired as a consultant to develop a simple customer profile lookup program that takes a customer first name and metadata as inputs, and verify if the customer name and given metadata exist. 

If both first name and metadata are true and verified the program should return the value of the metadata.

If the first name does not exist or correspond to any customer then the program should return "No such customer"

If the given metadata does not 
correspond to any valid customer metadata field or property for the given name, the program should return "No such metadata"

Instructions

1. Write a function called lookupCustomer, that takes customer first name, and a given property as arguments and returns the value of the given property e.g 

function lookupCustomerProfile(name, prop) {
	....

	return "Something"
}
*/

function lookupCustomer(name, prop) {
	const customers = [
		{
			firstName: "Robert",
			lastName: "Smith",
			email: "r.smith@live.com",
			phone: "+12074567890",
			likes: ["Roasted Beef", "potato fries", "Curry Soup"],
		},
		{
			firstName: "James",
			lastName: "Green",
			email: "j.green@live.com",
			phone: "+12081569890",
			likes: ["Fried Beef", "potato fries", "curry soup"],
		},
		{
			firstName: "Mary",
			lastName: "Brown",
			email: "b.brown@gmail.com",
			phone: "+12078577990",
			likes: ["roasted beef", "pasta", "onion soup"],
		},
		{
			firstName: "Alan",
			lastName: "Stone",
			email: "a.stone@live.com",
			phone: "+12068967870",
			likes: ["roasted beef", "potato fries", "curry soup"],
		},
		{
			firstName: "Linda",
			lastName: "Thomas",
			email: "lthomas23@gmail.com",
			phone: "+12068864550",
			likes: ["corn beef", "potato fries", "mushroom soup"],
		},
		{
			firstName: "Mathew",
			lastName: "Gala",
			email: "gallawy23@yahoo.com",
			phone: "+1604467789",
			likes: ["fried chicken", "plantain fries", "mixed soup"],
		},
		{
			firstName: "Samantha",
			lastName: "Knox",
			email: "s.knox@live.com",
			phone: "+1604576439",
			likes: ["Roasted Beef", "potato fries", "Curry Soup"],
		},
	];
	// Add code below this line
	return "No such customer";
}

//Tests
console.log(lookupCustomer("Samantha", "lastName")); //-> Knox

console.log(lookupCustomer("James", "email")); //-> j.green@live.com

console.log(lookupCustomer("Robert", "likes")); //-> ['Roasted Beef', 'potato fries', 'Curry Soup']

console.log(lookupCustomer("Mathew", "phone"));

console.log(lookupCustomer("Mary", "favorite")); //-> No such metadata

// Edge Cases:
console.log(lookupCustomer("", "")); //-> No such customer
console.log(lookupCustomer()); //-> No such customer


function generateRandomNumber(){
	return Math.random
}

console.log(generateRandomNumber());



//formular - Math.random() * (max - min + 1) + min;



function generateRandomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(generateRandomNumber(2,5));


/*The parseint Function 

parseint function () or method parses a string and returns an integer*/
//Example

const myInt =parseInt("007");
console.log(myInt);

/*Caveat: 
If the first character of the string can not be converted to a number type, the function will return NaN(Not a number)*/
//Example
/*const myInt =parseInt(";07");
console.log(myInt);*/

//Exercise - write a  function called convertToInt that takes a string as input and returns an integer

function convertToInt(str){

	return parseFloat(str);
}
console.log(convertToInt("75"));

/*To check a data type of JS do*/
console.log(typeof convertToInt("75"));

/*parseInt Function with Radix
the parseInt function takes a second augment called the Radix which specifies the base of the number. The Radix can be between 2 and 36.
The function parsed in will now be like this 
parseInt(string, radix); */

const binaryToInteger = parseInt("11", 2)
console.log(binaryToInteger);

/*Tenery Operator
It is a conditional operator which can be use - rather gracefully - to replace a simple if /else expression

x ? y = z

where 
x is the condition you want to test
y is the code you want to run when the condition returns true
z is the code to run when the condition returns false*/


/*function findGreaterNum(a, b){
	if (a > b) {
		return a + " is greater";
	} else {
		return b + " is greater or equal"
	} 
} */
// the above can be written as 

function findGreaterNum(a, b){
 return a > b ?  a + " is greater" : b + " is greater or equal"
}
 console.log(findGreaterNum(5,4))

 /*Using Multiple Conditional Tenary Operator */


 function findGreaterOrEqualNum(a, b){
	/*if (a === b) {
	return a + " and " + b + " are equal";	
	} else if (a > b) {
		return a + "is greater";
	} else{
		return b + " is greater"
	}
   }*/

return(a === b) ? a + " and " + b + " are equal"
:  a > b 
?  a + " is greater"
:  b + " is greater";
}
console.log(findGreaterOrEqualNum(5,8));

/*Recurssion is a concept that a function can be expressed in terms of itself. So this conceptually implies that a function can invoke itself repeatedly*/

// Given a task to multiply the first N element of an array and retun the product of all the items in the array. We could use a for loop.

function multiplyNums(arr, num) {
	if (num<=0 ) {
		return 1;
	} else {   
		return multiplyNums(arr, num -1) * arr [num -1];

	}
}
console.log(multiplyNums([1,2,3,4,5,6,7,8,9,10], 4));
	/*let product = 1;
	for ( let i = 0; i< num; i++) {
		product *= arr[i];
	}
	return product;
}
console.log(multiplyNums([1,2,3,4,5,6,7,8,9,10], 4)); //-> 24 */

/* Did you notice that 
multiplyNums(arr, num) == multiplyNums (arr, num - 1) * arr[n-1] */


/* 
Assignment Customer Profile Lookup 

A flourishing Restaurant in Lagos keeps a record of customer profile data and their food preferences in a simple excel file called customers.xls.

You are hired as a consultant to develop a simple customer profile lookup program that takes a customer first name and metadata as inputs, and verify if the customer name and given metadata exist. 

If both first name and metadata are true and verified the program should return the value of the metadata.

If the first name does not exist or correspond to any customer then the program should return "No such customer"

If the given metadata does not 
correspond to any valid customer metadata field or property for the given name, the program should return "No such metadata"

Instructions

1. Write a function called lookupCustomer, that takes customer first name, and a given property as arguments and returns the value of the given property e.g 

function lookupCustomerProfile(name, prop) {
	....

	return "Something"
}
*/

function lookupCustomer(name, prop) {
	const customers = [
		{
			firstName: "Robert",
			lastName: "Smith",
			email: "r.smith@live.com",
			phone: "+12074567890",
			likes: ["Roasted Beef", "potato fries", "Curry Soup"],
		},
		{
			firstName: "James",
			lastName: "Green",
			email: "j.green@live.com",
			phone: "+12081569890",
			likes: ["Fried Beef", "potato fries", "curry soup"],
		},
		{
			firstName: "Mary",
			lastName: "Brown",
			email: "b.brown@gmail.com",
			phone: "+12078577990",
			likes: ["roasted beef", "pasta", "onion soup"],
		},
		{
			firstName: "Alan",
			lastName: "Stone",
			email: "a.stone@live.com",
			phone: "+12068967870",
			likes: ["roasted beef", "potato fries", "curry soup"],
		},
		{
			firstName: "Linda",
			lastName: "Thomas",
			email: "lthomas23@gmail.com",
			phone: "+12068864550",
			likes: ["corn beef", "potato fries", "mushroom soup"],
		},
		{
			firstName: "Mathew",
			lastName: "Gala",
			email: "gallawy23@yahoo.com",
			phone: "+1604467789",
			likes: ["fried chicken", "plantain fries", "mixed soup"],
		},
		{
			firstName: "Samantha",
			lastName: "Knox",
			email: "s.knox@live.com",
			phone: "+1604576439",
			likes: ["Roasted Beef", "potato fries", "Curry Soup"],
		},
	];
};
	// Add code below this line
const customer = lookupCustomer.find((customer) == customer.firstName === name);    
	if (customer) {
        if (customer.firstName === customer.hasOwnProperty(prop)) {
            return customer[prop];
        } else {
			if (customer.firstName != customer.hasOwnProperty(prop))
            return "No such metadata";
        }
    } else {
        return "No such customer";
    };

	  /* SECOND ATTEMPT
	   firstName = customers.firstName;
		if (firstName === customers.firstName) {
			return customers.lastName, customers.email, customers.phone, customers.likes
		} else if (firstName != customers.lastName, customers.email, customers.phone, customers.likes) {
			return "no such customer";
		} else {
			return "no such metaData";
		};*/

		

//Tests
console.log(lookupCustomer("Samantha", "lastName")); //-> Knox

console.log(lookupCustomer("James", "email")); //-> j.green@live.com

console.log(lookupCustomer("Robert", "likes")); //-> ['Roasted Beef', 'potato fries', 'Curry Soup']

console.log(lookupCustomer("Mathew", "phone"));

console.log(lookupCustomer("Mary", "favorite")); //-> No such metadata

// Edge Cases:
console.log(lookupCustomer("", "")); //-> No such customer
console.log(lookupCustomer()); //-> No such customer








