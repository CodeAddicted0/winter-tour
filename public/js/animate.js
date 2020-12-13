const text = document.querySelector(".content");
const nav = document.querySelector("nav");
const listp = document.querySelectorAll(".listp");

var opacityC = {
  distance: "0%",
  opacity: 0.8,
};

var navDrop = {
  distance: "100%",
  origin: "top",
  opacity: null,
  delay: 500,
  duration: 1000,
  reset: true,
};

var listDrop = {
  distance: "10%",
  origin: "top",
  opacity: 0,
  duration: 500,
  interval: 200,
};

ScrollReveal().reveal(text, opacityC);
ScrollReveal().reveal(nav, navDrop);
ScrollReveal().reveal(listp, listDrop);
