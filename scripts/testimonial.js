const testimonial1 = {
  pfp: "images/portrait1.jpg",
  name: "Ms Ooi",
  title: "Owner of Soon Seng Heang",
  quote:
    "Choosing XYZ Packaging Solutions was one of the best decisions for our business. Their team's expertise and creativity led to packaging designs that surpassed our expectations. The quality of their work and on-time delivery impressed us, and their customer service was exceptional. Thanks to their innovative packaging, our products stand out on the shelves, and we've received numerous compliments from our customers. We highly recommend XYZ Packaging Solutions for their professionalism and outstanding packaging solutions.",
};

const testimonial2 = {
  pfp: "images/portrait2.jpg",
  name: "Mr Bob",
  title: "Owner of Apple",
  quote:
    "I am thrilled to share my experience with XYZ Packaging Solutions. Their attention to detail and commitment to excellence are truly commendable. The packaging they designed for our products not only enhanced their visual appeal but also ensured their safety during shipping. The team's responsiveness and willingness to customize solutions to our specific needs made the entire process smooth and enjoyable. Thanks to XYZ Packaging Solutions, our brand's packaging has become a point of admiration among our customers, setting us apart in a competitive market.",
};

const testimonial3 = {
  pfp: "images/portrait3.jpg",
  name: "Mr Wong",
  title: "Owner of Manchester City",
  quote:
    "I couldn't be happier with the packaging services provided by XYZ Packaging Solutions. From the initial consultation to the final product, their team demonstrated professionalism and creativity. Our products now have packaging that not only showcases their features but also aligns perfectly with our brand identity. The positive feedback from our customers speaks volumes about the impact of their work. XYZ Packaging Solutions truly understands the art and science of packaging, and I wholeheartedly recommend their services to anyone seeking packaging solutions that make a difference.",
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
