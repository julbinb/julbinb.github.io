function toggle_visibility(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'none') ? 'block' : 'none';
}

function toggle_visibility_name(id, name) {
    var e = document.getElementById(id);
    if (e === null) {
      console.log("couldn't fine element " + id);
    }
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
