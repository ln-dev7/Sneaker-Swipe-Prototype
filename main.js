import "./style.scss";
import gsap from "gsap";

const oneBtn = document.querySelector(".one-btn");
const twoBtn = document.querySelector(".two-btn");

const oneImages = document.querySelectorAll(".one-images img");
const twoImages = document.querySelectorAll(".two-images img");
const threeImages = document.querySelectorAll(".three-images img");
const fourImages = document.querySelectorAll(".four-images img");
const fiveImages = document.querySelectorAll(".five-images img");

const duration = 1.5;
const easeElastic = "elastic.out(1,0.85)";

oneBtn.addEventListener("click", () => {
  gsap.to(".left-one", {
    x: 0,
    opacity: 1,
    duration: duration,
    ease: easeElastic,
  });
  gsap.to(".left-two", {
    x: -340,
    opacity: 0,
    duration: duration,
    ease: easeElastic,
  });
  gsap.to(".right-one", {
    x: 0,
    opacity: 1,
    duration: duration,
    ease: easeElastic,
  });
  gsap.to(".right-two", {
    x: 300,
    opacity: 0,
    duration: duration,
    ease: easeElastic,
  });
  gsap.to(".one-container", {
    x: 0,
    y: 0,
    rotate: 0,
    duration: duration,
    ease: easeElastic,
  });
  gsap.to(".two-container", {
    x: -384,
    y: -384,
    rotate: -90,
    duration: duration,
    ease: easeElastic,
  });
});

twoBtn.addEventListener("click", () => {
  gsap.to(".left-one", {
    x: -340,
    opacity: 0,
    duration: duration,
    ease: easeElastic,
  });
  gsap.to(".left-two", {
    x: 0,
    opacity: 1,
    duration: duration,
    ease: easeElastic,
  });
  gsap.to(".right-one", {
    x: 300,
    opacity: 0,
    duration: duration,
    ease: easeElastic,
  });
  gsap.to(".right-two", {
    x: 0,
    opacity: 1,
    duration: duration,
    ease: easeElastic,
  });
  gsap.to(".one-container", {
    x: 384,
    y: -384,
    rotate: 90,
    duration: duration,
    ease: easeElastic,
  });
  gsap.to(".two-container", {
    x: 0,
    y: 0,
    rotate: 0,
    duration: duration,
    ease: easeElastic,
  });
});
