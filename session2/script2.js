let fruits = ["apples", "mango", "banana"];
console.log(fruits[0]);
console.log(fruits.length); //length of the list/array
console.log(fruits[fruits.length - 1]); //access the last item

console.log(fruits[0].length); //length of the element at [0]

/* common array methods
push() add item to end
pop() remove item from end
shift() remove from start
unshift() add an item at the start
*/

// FOR LOOP TO ITERATE ON THE GIVEN LIST OF FRUITS
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("================");

// FOR OF LOOP
// for(let singular of plural)
for (let x of fruits) {
  console.log(x);
}

console.log("================");

// FOREACH is a method for an array to iterate on the given list, and it does not return any value.
// only used on a given list
//parameters(element, index, array)
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

// FILTER

let output = fruits.filter((fruit) => fruit.length >= 6);
console.log(output);

let movies = [
  "The Prestige",
  "Shawshank Redemption",
  "The Batman",
  "Tinker Tailor Solider Spy",
  "Knives Out",
];

console.log(movies[0]);
console.log(movies[movies.length - 1]);

movies.push("La La Land");
console.log(movies);
movies.pop();
console.log(movies);

const me = { name: "Ram", age: 30, hobbies: ["reading", "games", "badminton"] };
console.log(me.hobbies[1]);
