/* Objects written as name value pairs are similar to:

- Associative arrays in PHP
- Dictionaries in Python
- Hash tables in C
- Hash maps in Java
- Hashes in Ruby and Perl */


/* Object values are written as name : value pairs (name and value separated by a colon). */
/* prefered method */

/*
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let data = "";
for(x in person){
    data += person[x] + " "; 
}
document.getElementById("salman").innerHTML = data
console.log(data);
// document.getElementById("salman").innerHTML = person["firstName"] + " is " + person["age"] + " years old"; 
// const myArray = Object.values(person);
// document.getElementById("demo").innerHTML = myArray;



/* You can create a Map by passing an Array to the new Map() constructor: */
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// /* You can add elements to a Map with the set() method: */
// const fruit = new Map();
// // Set Map Values
// fruit.set("apples", 500);
// fruit.set("bananas", 300);
// fruit.set("oranges", 200);


// /* This example creates an empty JavaScript object, and then adds 4 properties: */
// const person1 = {}; /* this can also be written as -> const person = new Object(); */
// person1.firstName = "John";
// person1.lastName = "Doe";
// person1.age = 50;
// person1.eyeColor = "blue";


// //callbacks in javascript

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);


//objects
// let details = {
//   name: "salman",
//   syndicate: "CE-43-A",
//   cms: "374110",
//   age: 20,
// }

// let bio
// for(x in details){
//   bio += x + " : " + details[x] + "\n"
//   // console.log(x + " : " + details[x])
// }
// console.log(bio)



// setInterval(dateFuntion, 1000);

// function dateFuntion(){
//   let d = new Date();
//   let sal = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//   document.getElementById("date").innerHTML = sal
//   //d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

// }
// setInterval(popupFunction, 3000);

// function popupFunction() {
//   let pop = document.getElementById("popup");
//   pop.classList.add("show");
// }

// setInterval(changeColor, 10000)

// function changeColor(){
//   let pop = document.getElementById("popup");
//   pop.classList.add("back");
//   pop.blur()
// }

document.getElementById("add-btn").addEventListener("click" , () => {
  let inputtext = document.getElementById("inputtext").value;
  if(inputtext != ""){
    const newItem = document.createElement("li");
    newItem.textContent = inputtext;
    const list = document.getElementById("notes");
    list.appendChild(newItem);
    newItem.classList.add("myitems")
    document.getElementById("inputtext").value = "";
  }
})

document.getElementById("remove-btn").addEventListener("click", () => {
  const removeButton = document.getElementById("remove-btn");
  const list = document.getElementById("notes");
  const listItems = list.getElementsByTagName("li");
  if (listItems.length > 0) {
    listItems[0].remove(); // Remove the first <li> element
  }
})