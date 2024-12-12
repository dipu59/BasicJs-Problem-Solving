//Q:1-Create a variable called carName, assign the value Volvo to it.
let carName = 'Volvo';


//Q:2- On one single line, declare three variables with the following names and values:
let FirstName = "John";
let LastName = "Doe";
let Age = 35;

//Q:3-Use the correct assignment operator that will result in x being 50 (same as x = x * y).

50; //This is the correct assignment operator.
let x = 10;
let y = 5;
x = x * y; //10*5=50;


//Q:4-Use comments to describe the correct data type of the following variables:

let length = 16; // data type: number
let lastName = "Johnson"; // data type: string

const xs = {
  firstName: "John",  
  lastName: "Doe"
}; // data type: object


//Q:5-Execute the function named myFunction.
function myFunction() {
    alert("Hello World!");
  }
  
  // Call the function
  myFunction();
  

//Q:6-Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
// Create an object called person
const person = {
    name: "John",
    age: 50
  };
  
  // Access the object and display an alert
  alert(person.name + " is " + person.age);
  

  //Q:7-The <button> element should do something when someone clicks on it. Try to fix it!
  const button = document.getElementById('myButton');

  // Add a click event listener to the button
  button.addEventListener('click', function() {
      alert('Button was clicked!');

 
//Q:8-Array Related Question

//Allart
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

//change
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";


//Q:9-Math Related Problems
//sub-Q:1
let randomNumber = Math.random();
//sub-Q:2
let largestNumber = Math.max(10, 20);
//sub-Q:3
let squareRoot = Math.sqrt(9);



//Q:10-comparison operator related problems! 
//sub question:1
let x = 10;
let y = 5;

alert(x > y); // This will alert true because 10 is greater than 5.

//sub question:2
let age = 17; // You can change this value to test different ages

alert(age < 18 ? "Too young" : "Old enough");
