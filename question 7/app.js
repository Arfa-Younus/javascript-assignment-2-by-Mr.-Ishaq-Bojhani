// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


function retriveObj(a) {
let storedObject = localStorage.getItem(a);
return JSON.parse(storedObject);
}
let car = {
brand:"Suzuki",
color:"white",
price:10000
}
localStorage.setItem("carData", JSON.stringify(car));
let objRetrived= retriveObj("carData");
console.log(objRetrived); 
      