// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestArr:string[] = ["Farzana", "Fatima", "Ahmed", "Azeem"];
let canNotattend: string = "Ahmed";
let newGuest:string = "Raza";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Abida");
let middleGuest:string = "Haram";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);

// console.log(guestArr)

console.log(guestArr.length + " " + "please" + " " + "are invited to dinner");