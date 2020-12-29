"use strict";

const descHolders = {
	icon : document.getElementById("descIcon"),
	category : document.getElementById("descCategory"),
	name : document.getElementById("descName"),
	address : document.getElementById("descAddress"),
	tags : document.getElementById("descTags"),
	pictureLeft : document.getElementById("descPictureLeft"),
	pictureMiddle : document.getElementById("descPictureMiddle"),
	pictureRight : document.getElementById("descPictureRight")
}
let carrouselPictures = ["bigFrite1","bigFrite2", "bigFrite3"];
let carrouselState = 0;

const openMenu = () => {
	document.getElementById("home").classList.add("opened");
	setTimeout(() => {
		document.getElementById("homeBackground").classList.add("opened");
	}, 200);
}
const showFavorites = () => {
	document.getElementById("favorites").classList.remove("opened");
}
const updateCarrousel = () => {
	descHolders.pictureLeft.src = carrouselState ? `assets/${carrouselPictures[carrouselState-1]}.jpeg` : "";
	descHolders.pictureMiddle.src = `assets/${carrouselPictures[carrouselState]}.jpeg`;
	descHolders.pictureRight.src = (carrouselPictures.length-carrouselState-1) ? `assets/${carrouselPictures[carrouselState+1]}.jpeg` : "";
}
const hideDescription = () => {
	document.getElementById("description").classList.remove("opened");
}
const showDescription = (location) => {
	//updateDescription(location);
	document.getElementById("description").classList.add("opened");
}
const updateDescription = (location) => {
	descHolders.icon.src = `assets/${location.cat.toLowerCase()}.svg`;
	descHolders.category.innerHTML = location.cat;
	descHolders.name.innerHTML = location.name;
	descHolders.address.innerHTML = location.address;
	descHolders.tags.innerHTML = "";
	location.tags.forEach((tag) => {
		descHolders.tags.innerHTML += `<p class="description__infos-tag">${tag}</p>`;
	});

	carrouselPictures = location.img;
	carrouselState = 0;
	updateCarrousel();
}
const insertLocations = (id) => {
	//mymap.removeLayer(marker);
	document.querySelector("div.leaflet-shadow-pane").innerHTML = "";
	document.querySelector("div.leaflet-marker-pane").innerHTML = "";

	locations[id].forEach((location) => {
		const marker = L.marker([location.lat, location.long]).addTo(mymap);
		marker.on("click", (location)=>{showDescription(location)});
	});
}

document.getElementById("login").addEventListener("click", ()=>{openMenu()});
document.getElementById("signup").addEventListener("click", ()=>{openMenu()});
document.getElementById("list").addEventListener("click", ()=>{showFavorites()});
document.getElementById("back").addEventListener("click", ()=>{hideDescription()});

document.getElementById("descPictureLeft").addEventListener("click", ()=>{
	carrouselState = (carrouselState - 1) % carrouselPictures.length;
	updateCarrousel();
});
document.getElementById("descPictureRight").addEventListener("click", ()=>{
	carrouselState = (carrouselState + 1) % carrouselPictures.length;
	updateCarrousel();
});

[...document.querySelectorAll("button.favorites__category")].forEach((button, i) => {
	button.querySelector(".favorites__category-amount").innerHTML = locations[i].length;
	button.addEventListener("click", () => {
		document.getElementById("favorites").classList.add("opened");
		insertLocations(i);
	});
});

//LEAFLET
let mymap = L.map('mapid').setView([50.62242, 5.58360], 13);

const layer =  new L.StamenTileLayer("terrain");
mymap.addLayer(layer);

//CARROUSEL



updateCarrousel();