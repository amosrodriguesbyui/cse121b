/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Amos Rodrigues",
    photo: "images/amos_rodrigues.jpg",
    favoriteFoods: [        
        "Macaroni and cheese",
        "Pizza margherita",
        "Cheeseburger",
        "French fries",
        "Greek salad",
        "Milkshake"
    ],
    hobbies: [
        "Listening to Music",
        "Church Activities",
        "Family Time",
        "Swimming",
        "Fishing"
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: ["Mindelo, Cape Verde"],
        length: ["1 years"]
    },
    {
        place: ["Praia, Cape Verde"],
        length: ["21 years"]
    },
    {
        place: ["Lisbon, Portugal"],
        length: ["2 years"]
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});