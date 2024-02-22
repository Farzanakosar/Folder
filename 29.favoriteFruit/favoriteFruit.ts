// 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favoriteFruit:string[] = ["Banana", "apple", "Mango"];

if(favoriteFruit.includes("Banana")){
    console.log("you realy like Bananas!")
}
if(favoriteFruit.includes("Apple")){
    console.log("you realy like Apple!")
}
if(favoriteFruit.includes("Orange")){
    console.log("you realy like Orange!")
}else{
    console.log("Orange is not my favorite fruit list")
}

if(favoriteFruit.includes("Mango")){
    console.log("you realy like Mangoes!")
}
if(favoriteFruit.includes("Grapes")){
    console.log("you realy like Grapes!")
}else{
    console.log("Grapes are not in my favorite list.")
}