"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// lowercase:
let personName = "farzana kosar";
console.log(personName.toLowerCase());
// Uppercase
let personName1 = "farzana kosar";
console.log(personName1.toUpperCase());
// Titlecase.
let personName2 = "farzana kosar";
console.log(personName2.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));
