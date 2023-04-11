// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


function numClosure() {
  return (add) => {
    return add + 8;
  }
}
let include8 = numClosure();
console.log(include8(69));
console.log(include8(78));
console.log(include8(98));
console.log(include8(99));
console.log(include8(76));
console.log(include8(96));


