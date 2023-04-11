// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function objToLocal(a,b) {
    localStorage.setItem(a, JSON.stringify(b));
  }
  let car ={ name:"2015 Honda CR-V EX-L",Interior_Color: "Gray", Body: "SUV",Seating:"5 seats", };
  objToLocal("data",car);
  let objStored = JSON.parse(localStorage.getItem("data"));
  console.log(objStored); 
      