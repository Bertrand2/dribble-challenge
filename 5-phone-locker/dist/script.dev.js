"use strict";
/* SLIDER */

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

document.getElementById("unlock-button").addEventListener("click", function () {
  document.querySelector("div.slider").classList.add("opened");
});
/* BUTTONS */

var keyboard = _toConsumableArray(document.querySelectorAll("li.keyboard__keys-key"));

var dots = _toConsumableArray(document.querySelectorAll("li.keyboard__dots-dot"));

var dotColorDefault = "#8789C0";
var dotColorSet = "#4d4fb9";
var dotColorWrong = "#b84e4e";
var code = "8845";
var codeAttempt = "";

var updateDisplay = function updateDisplay() {
  dots.forEach(function (dot, i) {
    if (i < codeAttempt.length) {
      dot.style.backgroundColor = dotColorSet;
    } else {
      dot.style.backgroundColor = dotColorDefault;
    }
  });
};

var checkCode = function checkCode() {
  if (codeAttempt === code) {
    document.getElementById("transition-screen").classList.add("transition");
  } else {
    document.querySelector(".keyboard__dots").classList.add("wrong");
    dots.forEach(function (dot) {
      return dot.style.backgroundColor = dotColorWrong;
    });
    setTimeout(function () {
      document.querySelector(".keyboard__dots").classList.remove("wrong");
      codeAttempt = "";
      updateDisplay();
    }, 600);
  }
};

keyboard.forEach(function (key) {
  key.addEventListener("click", function () {
    //console.log(key.getAttribute("key"));
    switch (key.getAttribute("key")) {
      case "back":
        codeAttempt = codeAttempt.slice(0, -1);
        updateDisplay();
        break;

      case "clr":
        codeAttempt = "";
        updateDisplay();
        break;

      default:
        if (codeAttempt.length < 3) {
          codeAttempt += key.getAttribute("key");
          updateDisplay();
        } else if (codeAttempt.length === 3) {
          codeAttempt += key.getAttribute("key");
          updateDisplay();
          checkCode();
        }

    }

    console.log(codeAttempt);
  });
});