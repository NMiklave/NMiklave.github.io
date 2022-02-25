/*
To use: Make a list, in each <li> element, include a <button> (to be clicked on) and a <p> that will have its display toggled.
*/

// Get all elements of type <button>
var allSpan = document.getElementsByClassName("CollapsableItem");
for(var x = 0; x < allSpan.length; x++) {
	// Listen for clicks to occur, then execute
  allSpan[x].addEventListener("click", function() {
  	// Toggle the .active class (starts off)
  	this.classList.toggle("active");

    // Get all <p> elements that are sibling to button
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    	content.style.padding = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
			content.style.padding = "5px 20px 10px";
    }
  });
}
