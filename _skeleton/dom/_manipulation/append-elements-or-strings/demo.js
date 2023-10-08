/**
 * Insert one or more elements or strings
 * at the end of a set elements inside a shared parent.
 * Call the Element.append() method on the target node,
 * and pass in one or more new elements or strings as arguments.
 */

// Create a new element
let li = document.createElement("li");
li.textContent = "I am new here.";

// Create another new element
let liToo = document.createElement("li");
liToo.textContent = `I'm new, too!`;

// Get the parent node
let list = document.querySelector("#list");

// Insert the new node after the last element in the parent node
// ...<li>Item 3</li><li>I am new here.</li>
list.append(li);

// You can inject more than one item by passing in multiple arguments
// ...<li>Item 3</li><li>I am new here.</li><li>I'm new, too!</li>
list.append(li, liToo);
