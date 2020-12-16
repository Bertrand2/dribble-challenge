"use strict";

const background = "#8789C0";
const backgroundHover = "#7CC6FE";

document.querySelector("button.reservation").addEventListener("mouseover", () => {
	document.querySelector("body").style.backgroundColor = backgroundHover;
});

document.querySelector("button.reservation").addEventListener("mouseout", () => {
	document.querySelector("body").style.backgroundColor = background;
});