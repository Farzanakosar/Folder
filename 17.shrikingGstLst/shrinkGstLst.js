"use strict";
// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("I can invite only two people for a Dinner");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let guestArry = ["Farzana", "Fatima", "Ahmed", "Azeem"];
while (guestArry.length > 2) {
    let removeGuest = guestArry.pop();
    console.log(`Dear ${removeGuest}, you are not invited to the Dinner`);
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
guestArry.map((item) => console.log(`Dear ${item}, you are still invited to the Dinner`));
guestArry.pop();
console.log(guestArry);
