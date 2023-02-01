"use strict"

// get jerryed
const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/club-logo.png") {
		myImage.setAttribute("src", "images/jerryed.jpeg");
	} else {
		myImage.setAttribute("src", "images/club-logo.png");
	}
};


// set up variables to draw radar
var radarCanvas = document.getElementById("radar");
var radar = radarCanvas.getContext("2d");
var width = radarCanvas.getAttribute("width");
var height = radarCanvas.getAttribute("height");
var x_0 = width / 2;
var y_0 = height / 2;
var radius = x_0 - 10;


let start = Date.now();

let timer = setInterval(function() {
	// clear canvas
	radar.clearRect(0, 0, width, height);

	// draw the outer circle
	radar.strokeStyle = "#00694E";
	radar.beginPath();
	radar.arc(x_0, y_0, radius, 0, 2 * Math.PI);
	radar.stroke();

	// draw the sweep
	let timePassed = Date.now() - start;
	let theta = timePassed*Math.PI/2000;

	radar.beginPath();
	radar.moveTo(x_0, y_0);
	radar.lineTo(x_0 + radius*Math.cos(theta), y_0 + radius*Math.sin(theta));
	radar.stroke();

}, 20)