/* Task 1
1. Declare an array
a.Declare an array with 5 elements containing fruits
b.console log the 3rd index element
c.change the value of the 2nd index element to jambura
d.console log the final array
*/
const fruits = ["apple", "banana", "jackfruit", "strawberry", "lichi"];
console.log("#rd index of fruits is: ", fruits[2]);
fruits[1] = "jambura";
console.log("Final array is: ", fruits);

/*Task 2
2. Add or remove elements
a.Declare an array of 3 tourist destinations
b.Add a new tourist destination to your tourist array
c.Add two more to your array
d.Remove the last tourist destination you have added
e.display the final array as output
*/

//a.Declare an array of 3 tourist destinations
const touristsDestination = ["Bandorban", "cox's bazar", "Rangamati"];

//b.Add a new tourist destination to your tourist array
touristsDestination.push("Nikli Haor");

//c.Add two more to your array
touristsDestination.push("Sunamgonj", "Kanchonjonga");

// console.log(touristsDestination);

//d.Remove the last tourist destination you have added
touristsDestination.pop();
console.log("Final array is: ", touristsDestination);

/*
Task 3
3. Checking Array Membership with 'includes'
Instructions:

Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not.

*/

const books = ["HTML", "CSS", "javascript", "php", "php oop"];

if (books.includes("javascript")) {
  console.log(
    "Javascript book is present in index no: ",
    books.indexOf("javascript")
  );
} else {
  console.log("There is no JS books here");
}

/*
Task 4
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not.
*/

const names = ["Rakib", "Rafiq", "Razu", "Rayhan", "Musfi", "Shilpee"];
const isItArray = Array.isArray(names);
console.log("Is it array or not true/false", isItArray);

const name = "Rakib";
console.log(
  "Is it array or not true/false",
  Array.isArray(name),
  "It is a :",
  typeof name
);

/*
Task 5
5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().

*/

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];
console.log(numbers1);
console.log(numbers2);

const concatedArray = numbers1.concat(numbers2);
console.log(concatedArray);
