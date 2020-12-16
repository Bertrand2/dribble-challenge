"use strict";

var background = "#8789C0";
var backgroundHover = "#7CC6FE";
document.querySelector("button.reservation").addEventListener("mouseover", function () {
  document.querySelector("body").style.backgroundColor = backgroundHover;
});
document.querySelector("button.reservation").addEventListener("mouseout", function () {
  document.querySelector("body").style.backgroundColor = background;
});