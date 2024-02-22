"use strict";
//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guestArry = ["Farzana", "Fatima", "Ahmed", "Azeem"];
let canNotAttend = "Ahmed";
let newGuest = "Raza";
guestArry[guestArry.indexOf(canNotAttend)] = newGuest;
// console.log(guestArry);
// guestArry.map((item) => (
// console.log(`Dear ${item}, I found a bigger Dinner Table`)
// ));
let guestBegin = "Abida";
guestArry.unshift(guestBegin);
// console.log(guestArry);
let middleGuest = "Haram";
let middleIndex = guestArry.length / 2;
guestArry.splice(middleIndex, 0, middleGuest);
// console.log(guestArry);
guestArry.push("Abrish");
// console.log(guestArry);
guestArry.map((item) => (console.log(`Dear ${item}, You are codinally invited to a Dinner`)));
