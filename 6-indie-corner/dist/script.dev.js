"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var buttons = _toConsumableArray(document.querySelectorAll("li.article__navigator-character"));

var names = _toConsumableArray(document.querySelectorAll("p.article__name"));

var descriptions = _toConsumableArray(document.querySelectorAll("div.article__description"));

var pictures = _toConsumableArray(document.querySelectorAll("img.article__picture"));

var resetActivity = function resetActivity(start) {
  for (var i = start; i < start + 4; i++) {
    buttons[i].classList.remove("active");
    names[i].classList.remove("active");
    descriptions[i].classList.remove("active");
    pictures[i].classList.remove("active");
  }
};

buttons.forEach(function (button, i) {
  button.addEventListener("click", function () {
    resetActivity(4 * Math.floor(i / 4));
    button.classList.add("active");
    names[i].classList.add("active");
    descriptions[i].classList.add("active");
    pictures[i].classList.add("active");
  });
});