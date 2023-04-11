// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

let addParagraph = () =>{
    let newElement = document.createElement("p");
    newElement.append("this is a new paragraph");
    document.getElementById("newTextArea").appendChild(newElement);
}