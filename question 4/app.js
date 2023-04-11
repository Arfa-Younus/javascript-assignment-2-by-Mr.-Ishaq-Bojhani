// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addLi() {
var txtVal= document.getElementById("txtVal").value;
var listNode= document.getElementById("list");
var liNode= document.createElement("LI");
var txtNode= document.createTextNode(txtVal);
liNode.appendChild(txtNode);
listNode.appendChild(liNode);
}
