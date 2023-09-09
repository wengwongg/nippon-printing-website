const works = [
  "images/work1.jpg",
  "images/work2.jpg",
  "images/work3.jpg",
  "images/work4.jpg",
  "images/work5.jpg",
];

let current = 0;

const workContainer = document.querySelector(".work");
const leftArrow = document.querySelector(".arrow--left");
const rightArrow = document.querySelector(".arrow--right");
const circle1 = document.querySelector(".work__circle--1");
const circle2 = document.querySelector(".work__circle--2");
const circle3 = document.querySelector(".work__circle--3");
const circle4 = document.querySelector(".work__circle--4");
const circle5 = document.querySelector(".work__circle--5");
const circles = [circle1, circle2, circle3, circle4, circle5];

const activateSelectedCircle = function (circle) {
  circles.forEach((cur) => {
    if (cur === circle) cur.classList.add("current");
    else cur.classList.remove("current");
  });
};

const changeToCurrentWork = function () {
  workContainer.style.backgroundImage = `url("../${works[current]}")`;
};

const toggleCurrentCircle = function () {
  const currentCircle = document.querySelector(`.work__circle--${current + 1}`);
  currentCircle.classList.toggle("current");
};

const nextWork = function () {
  toggleCurrentCircle();
  if (current != 4) current++;
  else current = 0;

  toggleCurrentCircle();
  changeToCurrentWork();
};

const prevWork = function () {
  toggleCurrentCircle();
  if (current != 0) current--;
  else current = 4;

  toggleCurrentCircle();
  changeToCurrentWork();
};

leftArrow.addEventListener("click", prevWork);
rightArrow.addEventListener("click", nextWork);

const circleEventListener = function (currentValue) {
  current = currentValue;
  activateSelectedCircle(this);
  changeToCurrentWork();
};

circles.forEach((circle, i) => {
  circle.addEventListener("click", circleEventListener.bind(circle, i));
});
