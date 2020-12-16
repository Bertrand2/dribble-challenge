"use strict";

/* SLIDER */
document.getElementById("unlock-button").addEventListener("click", () => {
	document.querySelector("div.slider").classList.add("opened");
});

/* BUTTONS */
const keyboard = [...document.querySelectorAll("li.keyboard__keys-key")];
const dots = [...document.querySelectorAll("li.keyboard__dots-dot")];
const dotColorDefault = "#8789C0";
const dotColorSet = "#4d4fb9";
const dotColorWrong = "#b84e4e";
const code = "8845";
let codeAttempt = "";

const updateDisplay = () => {
	dots.forEach((dot, i) => {
		if(i<codeAttempt.length){
			dot.style.backgroundColor = dotColorSet;
		} else {
			dot.style.backgroundColor = dotColorDefault;
		}
	});
}

const checkCode = () => {
	if(codeAttempt === code) {
		document.getElementById("transition-screen").classList.add("transition");
	} else {
		document.querySelector(".keyboard__dots").classList.add("wrong");
		dots.forEach((dot) => dot.style.backgroundColor = dotColorWrong);
		setTimeout(() => {
			document.querySelector(".keyboard__dots").classList.remove("wrong");
			codeAttempt = "";
			updateDisplay();
		}, 600);
	}
}

keyboard.forEach((key) => {
	key.addEventListener("click", () => {

		//console.log(key.getAttribute("key"));
		switch(key.getAttribute("key")){
			case "back":
				codeAttempt = codeAttempt.slice(0,-1);
				updateDisplay();
				break;
			case "clr":
				codeAttempt = ""
				updateDisplay();
				break;
			default:
				if(codeAttempt.length < 3) {
					codeAttempt += key.getAttribute("key");
					updateDisplay();
				} else if(codeAttempt.length === 3) {
					codeAttempt += key.getAttribute("key");
					updateDisplay();
					checkCode();
				}
		}
		console.log(codeAttempt);
	});
});