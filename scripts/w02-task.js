/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Amos Rodrigues";
let year = new Date();
let currentYear = year.getFullYear();
const profilePicture = ("images/amos_rodrigues.jpg");

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = [
    "Macaroni and cheese",
    "Pizza margherita",
    "Cheeseburger",
    "Greek salad",
    "Milkshake",
]

foodElement.innerHTML += `<br>${favoriteFoods}`;

let anotherFoodItem = "French fries";
favoriteFoods.push(anotherFoodItem);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;