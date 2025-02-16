"use strict";

const checkBoxElement = document.querySelector(".checkbox");
const cardPrice = document.querySelectorAll(".card-price");

checkBoxElement.addEventListener("change", function (e) {
  cardPrice.forEach((a) => {
    if (e.target.checked) {
      a.classList.add("monthly");
    } else {
      a.classList.remove("monthly");
    }
  });
});
