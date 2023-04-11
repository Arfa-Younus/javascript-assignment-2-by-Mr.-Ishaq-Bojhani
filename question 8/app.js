// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.


const car= {
name : "Tesla",
model : 32,
seats : "4",
color: "black"}
window.localStorage.setItem("car", JSON.stringify(car));
let newObject = window.localStorage.getItem("car");
console.log(JSON.parse(newObject));