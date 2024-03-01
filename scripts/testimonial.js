const testimonial1 = {
  pfp: "images/portrait1.jpg",
  name: "Ms. Sky Sitt",
  title: "Owner of Guan Heong Biscuit Shop",
  quote:
    "I am incredibly satisfied with the services provided by Nippon Printing. Our long-term business relationship spanning over 10 years speaks volumes about the trust and reliability they consistently demonstrate. From the moment I inquired about their box printing to the post-delivery support, the experience has been outstanding. The design and functionality of the box are top-notch, delivering exceptional results. Nippon Printing goes above and beyond, providing a seamless experience from order to delivery. The post-delivery service reflects their commitment to customer satisfaction, ensuring that I felt supported every step of the way. I wholeheartedly recommend Nippon Printing for anyone in search of high-quality box printers and unparalleled customer service. They have earned my trust and loyalty.",
};

const testimonial2 = {
  pfp: "images/portrait2.jpg",
  name: "Eng",
  title: "Owner of Sin Teo Hiang Sdn. Bhd.",
  quote:
    "I highly recommend Nippon Printing. Their product quality and customer service are  consistently outstanding and exceeding my expectations. I was completely impressed with their professionalism and creativity of their products and they've helped us in boosting our business. Their staff, especially their lady boss, are friendly, knowledgeable, trustworthy and really listen to what I wanted and help us in packaging solution!",
};

const testimonial3 = {
  pfp: "images/portrait3.jpg",
  name: "",
  title: "Owner of Kow Hong Sdn. Bhd.",
  quote:
    "Nippon Printing's outstanding service goes above and beyond, consistently meeting customer demands with precision and excellence. Their commitment to customer satisfaction truly sets them apart in delivering top-notch printing services.",
};

const testimonials = [testimonial1, testimonial2, testimonial3];

let current = 0;

const leftArrow = document.querySelector(".arrow--left");
const rightArrow = document.querySelector(".arrow--right");
const circle1 = document.querySelector(".testimonials__circle--1");
const circle2 = document.querySelector(".testimonials__circle--2");
const circle3 = document.querySelector(".testimonials__circle--3");
const circles = [circle1, circle2, circle3];

const personPFP = document.querySelector(".testimonials__pfp");
const personName = document.querySelector(".testimonials__name--address");
const personTitle = document.querySelector(".testimonials__name--title");
const personQuote = document.querySelector(".testimonials__testimonial");

const toggleCurrentCircle = function () {
  const currentCircle = document.querySelector(
    `.testimonials__circle--${current + 1}`
  );
  currentCircle.classList.toggle("current");
};

const activateSelectedCircle = function (circle) {
  circles.forEach((cur) => {
    if (cur === circle) cur.classList.add("current");
    else cur.classList.remove("current");
  });
};

const changeToCurrentTestimonialHTML = function () {
  personPFP.style.backgroundImage = `url("../${testimonials[current].pfp}")`;
  personName.textContent = testimonials[current].name.toUpperCase();
  personTitle.textContent = testimonials[current].title.toUpperCase();
  personQuote.textContent = testimonials[current].quote;
};

const nextTestimonial = function () {
  toggleCurrentCircle();
  if (current != 2) current++;
  else current = 0;

  toggleCurrentCircle();
  changeToCurrentTestimonialHTML();
};

const prevTestimonial = function () {
  toggleCurrentCircle();
  if (current != 0) current--;
  else current = 2;

  toggleCurrentCircle();
  changeToCurrentTestimonialHTML();
};

leftArrow.addEventListener("click", prevTestimonial);
rightArrow.addEventListener("click", nextTestimonial);

const circleEventListener = function (currentValue) {
  current = currentValue;
  activateSelectedCircle(this);
  changeToCurrentTestimonialHTML();
};

circles.forEach((circle, i) => {
  circle.addEventListener("click", circleEventListener.bind(circle, i));
});
