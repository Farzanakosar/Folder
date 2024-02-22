"use strict";
// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
const string1 = "Karachi";
const string2 = "Lahore";
console.log(string1 === string2);
console.log(string1 !== string2);
// • Tests using the lower case function
const mixCaseString = "HelloWorld";
console.log(mixCaseString.toLowerCase() === "helloworld");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
const conditionl = true;
const condition2 = false;
console.log(conditionl && condition2);
console.log(conditionl || condition2);
// • Test whether an item is in a array
// • Test whether an item is not in a array
const fruit = ["Apple", "Banana", "Orange", "Grapes"];
console.log(fruit.includes("Apple"));
console.log(fruit.includes("apple"));
