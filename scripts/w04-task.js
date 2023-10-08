/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Nathan",
    photo: 'images/me.jpeg',
    favoriteFoods: [
      'Rice',
      'Potatoes',
      'Cereal', 
      'Meat',
      'Bananas'
    ],
    hobbies: [
        'Camping',
        'Hiking',
        'Boating',
        'Movies',
        'Working out'
    ],
    placesLived: [],
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
     place: 'Denver, CO',
     time: '18 years'
    },
    {
    place: 'Rexburg, ID',
    time: '4 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(pl => {
    let dt = document.createElement('dt');
    dt.textContent = pl.place;
    let dd = document.createElement('dd');
    dd.textContent = pl.time;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})


