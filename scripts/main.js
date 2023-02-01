"use strict"

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/club-logo.png") {
    myImage.setAttribute("src", "images/jerryed.jpeg");
  } else {
    myImage.setAttribute("src", "images/club-logo.png");
  }
};
