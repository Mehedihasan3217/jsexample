// ex1 text show
 function textShow(){
 document.getElementById('st').innerHTML="Hello World";
 } 
// ex2 show date
 function showDate(){
    document.getElementById('sd').innerHTML=Date();
    } 
// ex3 text change
 function changeText(){
   document.getElementById('ct').innerHTML="Hello World";
   } 
// ex4 img change
function bulbOn(){
   document.getElementById('boo').src="images/on.gif";

}
function bulbOff(){
   document.getElementById('boo').src="images/off.gif";
   
}
// ex5 css change
function changeColor(){
   document.getElementById('color').style.color="red";
   
}
// ex6 show hide
function showItem(){
   document.getElementById('sh').style.display="block";
   
}
function hideItem(){
   document.getElementById('sh').style.display="none";
   
}
// ex7 math
function showMath(){
   document.getElementById('mt').innerHTML=5+9;
   
}
// ex8 print
function printPage(){
   window.print()
   
}
// ex9 display object
const persn = {
   name: "mehedi",
   age: 24,
   city: "bangladesh"
 }
 function disPlay(){
    document.getElementById("dsp").innerHTML = persn.name + ", " + persn.age + ", " + persn.city;
 }

// ex10 age
function aGe(){
   let age = document.getElementById("age").value;
   let voteable = (age < 18) ? "Too young":"Old enough";
   document.getElementById("ages").innerHTML = voteable + " to vote.";
 }   

// ex11true/false
function trueFalse(){
	document.getElementById('tf').innerHTML=Boolean(10 > 9);
}
// ex12 show day
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
function showDay(){
	document.getElementById("day").innerHTML = "Today is " + day;
}
// ex13 display object
const fruitsr = ["Banana", "Orange", "Apple", "Mango"];
fruitsr.reverse();
function fruitsReverse(){
	document.getElementById("fruits").innerHTML = fruitsr;
}
// ex14 variable
let number1, number2;
 number1 = 5;
 number2 = 4;
  
 number1 += number2
  
function showResult(){
   document.getElementById('sr').innerHTML = number1;
}
// ex15 show student name

let numbr1=10; 
let numbr2=5;

let result= numbr1>numbr2;

function showTrue(){
   document.getElementById('t_f').innerHTML=result;
}   
// ex16 show see day
const hour = new Date().getHours();

let gretting;
if(hour < 18){
   gretting = "Good day"
}
else{
   gretting = "Good evening"

}
function seeDay(){
   document.getElementById('cond').innerHTML=gretting;
}
// ex17 show name
let data = ["Rana", "Masud", "jamal"];

function arRay(){
   document.getElementById('ar').innerHTML = data[0];
} 
// ex18 JavaScript Strings
let carname1 = "volvo xc60";
let carname2 = 'volvo xc60';

function strIngs(){
   document.getElementById('js').innerHTML
   = carname1 + carname2;
}
// ex19 The at() Method
let text = "W3schools";
let character = text.at(-1);

function atMethod(){
   document.getElementById('at').innerHTML = character;
   
}
// ex20 JavaScript Numbers

let x = 456776;
let y = 574689;

function numBers(){
   document.getElementById('nm').innerHTML = x + "<br>" +  y;
   
}
// ex21 display object
let num = 654.6;
let text1 = num.constructor;

function conStructor(){
   document.getElementById('cp').innerHTML = text1;
   
}
// ex22 The Window Location Object
function myFunction(){
   location.assign("https://www.w3schools.com");
   
}
// ex23 The The language Property
let language = navigator.language;
function langPro(){
   document.getElementById('lp').innerHTML = language;
   
}
// ex24 The cookieEnabled Property
let cookies = navigator.cookieEnabled;

function appPro(){
   document.getElementById('appp').innerHTML = "Cookies enabled: " + cookies;
   
}
//25 The awindow alert

function winDow(){
   document.getElementById('wa').innerHTML = window.alert(5 + 6);
   
}
// ex26 JavaScript Validation API
function myyFunction() {
   let text;
   if (document.getElementById("id1").validity.rangeOverflow) {
     text = "Value too large";
   } else {
     text = "Input OK";
   } 
   document.getElementById("nac").innerHTML = text;
 }

  
// ex27 JavaScript Functions
function toCelsius(f) {
   return (5/9) * (f-32);
 }
 let value = toCelsius;
  document.getElementById('jf').innerHTML = value;

// ex28 JavaScript Numbers

let xx = new Number(500);

let yy = new Number(500);

function jaNumbers(){
   document.getElementById('janum').innerHTML = (xx=yy);
   
}
// ex29 JavaScript Math.floor

function jaMathe(){
   document.getElementById('jamath').innerHTML = Math.random();

}
// ex30 display object
const fruits = ["Banana", "Orange", "Apple", "Mango"];
  function popMethod(){
   document.getElementById('pop').innerHTML = fruits;
   fruits.pop();
   document.getElementById("pop2").innerHTML = fruits;

  }



