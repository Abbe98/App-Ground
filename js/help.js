//detect Touch support
if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
	var touch = true;
} else {
	var touch = false;
}

//get landscape/portrait orientation
if(window.innerHeight > window.innerWidth) {
	var portrait = true;
	var landscape = false;
} else {
	var portrait = false;
	var landscape = true;
}

//see if user has a internet connection or not
var connection = navigator.onLine ? "online" : "offline";

//detect retina screen
var retina = window.devicePixelRatio > 1;