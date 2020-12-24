/* flips the visibility of an element */
function toggle_visibility(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'none') ? 'block' : 'none';
}

/* flips the visibility of an element and
   changes the text of the corresponding button, e.g.
   "Abstract" -> "Abstract (hide)" when name is "Abstract"
 */
function toggle_visibility_name(id, name) {
    // div element
    var e = document.getElementById(id);
    if (e === null) {
      console.log("couldn't fine element " + id);
    }
    // button corresponsing to the element e
    var b = document.getElementById(id + "Button");
    if (e.style.display == 'none') {
		  e.style.display = 'block';
		  b.innerHTML = name + ' (hide)';
    }
    else {
	    e.style.display = 'none';
	    b.innerHTML = name;
	}
}
