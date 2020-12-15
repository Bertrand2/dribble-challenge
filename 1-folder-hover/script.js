"use strict";

let alreadyOver = false;

[...document.querySelectorAll(".folder")].forEach((folder) => {
	folder.addEventListener("mouseover", () => {
		if(!alreadyOver){
			setTimeout(() => {
				folder.querySelector("img.folder__front").src = "assets/file-front-opening.png";
			}, 200);
			setTimeout(() => {
				folder.querySelector("img.folder__front").src = "assets/file-front-open.png";
				alreadyOver = true;
			}, 400);
		}

	});
	folder.addEventListener("mouseout", () => {
		setTimeout(() => {
			folder.querySelector("img.folder__front").src = "assets/file-front-opening.png";
		}, 200);
		setTimeout(() => {
			folder.querySelector("img.folder__front").src = "assets/file-front-closed.png";
			alreadyOver = false;
		}, 400);
	});
});