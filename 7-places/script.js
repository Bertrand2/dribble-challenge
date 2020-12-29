"use strict";

const openMenu = () => {
	document.getElementById("home").classList.add("opened");
	setTimeout(() => {
		document.getElementById("homeBackground").classList.add("opened");
	}, 200);
}

const showFavorites = () => {
	document.getElementById("favorites").classList.remove("opened");
}
const insertLocations = (id) => {
	//mymap.removeLayer(marker);
	document.querySelector("div.leaflet-shadow-pane").innerHTML = "";
	document.querySelector("div.leaflet-marker-pane").innerHTML = "";

	locations[id].forEach((location) => {
		const marker = L.marker([location.lat, location.long]).addTo(mymap);
	});
}

document.getElementById("login").addEventListener("click", ()=>{openMenu()});
document.getElementById("signup").addEventListener("click", ()=>{openMenu()});
document.getElementById("list").addEventListener("click", ()=>{showFavorites()});

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