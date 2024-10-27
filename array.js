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
