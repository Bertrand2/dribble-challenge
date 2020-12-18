"use strict";

const emailInput = document.querySelector("input.email__input");
const emailRegex = /^([\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;

emailInput.addEventListener("input", () => {
	if(!emailInput.value) {
		document.querySelector("div.email").classList.remove("invalid");
		document.querySelector("div.email").classList.remove("valid");
		document.querySelector("div.email").classList.add("empty");
		document.getElementById("at-mail").style.filter = "invert(15%)";
		document.getElementById("ok-mail").style.filter = "invert(15%)";

	} else if(emailRegex.test(emailInput.value)){
		document.querySelector("div.email").classList.remove("invalid");
		document.querySelector("div.email").classList.add("valid");
		document.querySelector("div.email").classList.remove("empty");
		document.getElementById("ok-mail").style.filter = "invert(11%) sepia(72%) saturate(5469%) hue-rotate(115deg) brightness(94%) contrast(104%)";
	} else {
		document.querySelector("div.email").classList.add("invalid");
		document.querySelector("div.email").classList.remove("valid");
		document.querySelector("div.email").classList.remove("empty");
		document.getElementById("at-mail").style.filter = "invert(11%) sepia(66%) saturate(7495%) hue-rotate(21deg) brightness(90%) contrast(115%)";
	}
});