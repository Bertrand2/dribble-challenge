"use strict";

const minusButtons = [...document.querySelectorAll("div.left")];
const plusButtons = [...document.querySelectorAll("div.right")];
const quantityHolders = [...document.querySelectorAll("div.middle")];
const priceHolders = [...document.querySelectorAll("span.price")];

minusButtons.forEach((button, i) => {
	button.addEventListener("click", () => {
		let quantity = +quantityHolders[i].innerText;
		if(quantity > 1) {
			quantityHolders[i].innerText = --quantity;
			priceHolders[i].innerText = quantity * priceHolders[i].getAttribute("base");
		}
	});
});

plusButtons.forEach((button, i) => {
	button.addEventListener("click", () => {
		let quantity = +quantityHolders[i].innerText;
		if(quantity < 20) {
			quantityHolders[i].innerText = ++quantity;
			priceHolders[i].innerText = quantity * priceHolders[i].getAttribute("base");
		}
	});
});