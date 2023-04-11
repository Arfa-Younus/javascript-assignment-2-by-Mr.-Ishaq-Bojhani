// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.



let arr=["Pakistan","Turkey","China"];
let srchValue="Austraila";
let found=false;
for (let a =0; a<arr.length;a++){
  if (arr[a] === srchValue){
    found=true;
    break;
  }}
if (found){ console.log( srchValue + " is found");
} else { console.log(srchValue + "is not found");
}


  
  
  
