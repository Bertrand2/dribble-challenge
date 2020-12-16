"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minusButtons = _toConsumableArray(document.querySelectorAll("div.left"));

var plusButtons = _toConsumableArray(document.querySelectorAll("div.right"));

var quantityHolders = _toConsumableArray(document.querySelectorAll("div.middle"));

var priceHolders = _toConsumableArray(document.querySelectorAll("span.price"));

minusButtons.forEach(function (button, i) {
  button.addEventListener("click", function () {
    var quantity = +quantityHolders[i].innerText;

    if (quantity > 1) {
      quantityHolders[i].innerText = --quantity;
      priceHolders[i].innerText = quantity * priceHolders[i].getAttribute("base");
    }
  });
});
plusButtons.forEach(function (button, i) {
  button.addEventListener("click", function () {
    var quantity = +quantityHolders[i].innerText;

    if (quantity < 20) {
      quantityHolders[i].innerText = ++quantity;
      priceHolders[i].innerText = quantity * priceHolders[i].getAttribute("base");
    }
  });
});