/*
To use: Make a list, in each <li> element, include a <button> (to be clicked on) and a <p> that will have its display toggled.
*/


function collapsable(entry) {
	// Toggle the .active class (starts off)
  entry.classList.toggle("active");
  // Look at the next sibling element to the button
  var content = entry.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.padding = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.padding = "5px 20px 10px";
  }
}
