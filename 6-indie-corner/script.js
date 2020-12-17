"use strict";

const buttons = [...document.querySelectorAll("li.article__navigator-character")];
const names = [...document.querySelectorAll("p.article__name")];
const descriptions = [...document.querySelectorAll("div.article__description")];
const pictures = [...document.querySelectorAll("img.article__picture")];

const resetActivity = (start) => {
	for(let i=start ; i<start+4 ; i++) {
		buttons[i].classList.remove("active");
		names[i].classList.remove("active");
		descriptions[i].classList.remove("active");
		pictures[i].classList.remove("active");
	}
};

buttons.forEach((button, i) => {
	button.addEventListener("click", () => {
		resetActivity(4*Math.floor(i/4));
		button.classList.add("active");
		names[i].classList.add("active");
		descriptions[i].classList.add("active");
		pictures[i].classList.add("active");
	});
});