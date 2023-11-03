"use strict";

const modalBtn = document.querySelectorAll(".prod");
const modal = document.querySelector(".pro_modal");
const overlay = document.querySelector(".overlay");

modalBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
