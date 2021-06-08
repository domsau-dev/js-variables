"use strict";

var skaicius1 = 2;
var skaicius2 = 5;
var skaicius3 = 10;
var skaicius4 = 20;
var skaicius5 = 50;
var skaicius6 = 60;

var suma = skaicius1 + skaicius2 + skaicius3 + skaicius4;
var sandauga = skaicius1 * skaicius2 * skaicius3 * skaicius4;

console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);
console.log(skaicius4);
console.log(suma);
console.log(sandauga);

var temp;
temp = skaicius1;
skaicius1 = skaicius2;
skaicius2 = temp;

skaicius3 = skaicius3 + skaicius4;
skaicius4 = skaicius3 - skaicius4;
skaicius3 = skaicius3 - skaicius4;

alert("skaicius1: " + skaicius1 + "\n" + "skaicius2: " + skaicius2 + "\n" 
+ "skaicius3: " + skaicius3 + "\n" + "skaicius4: " + skaicius4);

var maxSkaicius = Number.MAX_VALUE;
console.log(maxSkaicius);

skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

document.getElementById('Rezultatas').innerHTML += 
"skaicius5: " + skaicius5 + "<br>" + "skaicius6: " + skaicius6;