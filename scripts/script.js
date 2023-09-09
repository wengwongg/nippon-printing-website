"use strict";

// prevent animations upon resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// Fade in reveal upon load.
function revealOnLoad() {
  const reveals = document.querySelectorAll(".reveal--on--load");
  reveals.forEach((reveal) => {
    reveal.classList.add("reveal--on--load--active");
  });
}

window.addEventListener("load", revealOnLoad);
