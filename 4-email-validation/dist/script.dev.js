"use strict";

var emailInput = document.querySelector("input.email__input");
var emailRegex = /^([\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;
emailInput.addEventListener("input", function () {
  if (!emailInput.value) {
    document.querySelector("div.email").classList.remove("valid");
    document.getElementById("at-mail").style.filter = "none";
    document.getElementById("ok-mail").style.filter = "none";
  } else if (emailRegex.test(emailInput.value)) {
    document.querySelector("div.email").classList.add("valid");
    document.getElementById("ok-mail").style.filter = "invert(85%) sepia(32%) saturate(862%) hue-rotate(59deg) brightness(97%) contrast(107%)";
  } else {
    document.querySelector("div.email").classList.remove("valid");
    document.getElementById("at-mail").style.filter = "invert(52%) sepia(14%) saturate(7439%) hue-rotate(327deg) brightness(111%) contrast(104%)";
  }
});