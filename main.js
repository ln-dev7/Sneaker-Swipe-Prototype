import "./style.scss";
import gsap from "gsap";

const oneBtn = document.querySelector(".one-btn");
const twoBtn = document.querySelector(".two-btn");

const clickImgs = document.querySelectorAll(".click-img");
const cards = document.querySelectorAll(".card");

const duration = 1.5;
const secondDuration = 0.3;
const easeElastic = "elastic.out(1,0.85)";

function animateClickImg(clickImg, index = undefined) {
  const tl = gsap.timeline();
  tl.to(clickImg, {
    y: -30,
    duration: secondDuration,
    ease: "power1.out",
  })
    .to(clickImg, {
      rotate: 25,
      duration: secondDuration,
      ease: "power1.out",
    })
    .to(clickImg, {
      rotate: -10,
      duration: secondDuration,
      ease: "power1.out",
    })
    .to(clickImg, {
      y: 0,
      rotate: 0,
      duration: secondDuration,
      ease: "power1.out",
      onComplete: () => {
        if (index) {
          const clickImgClass = ".click-img-" + index;
          const cardImgClass = ".card-" + index;
          const clickImg = document.querySelector(clickImgClass);
          const clikCard = document.querySelector(cardImgClass);
          clickImgs.forEach((img) => {
            img.classList.add("hidden");
          });
          cards.forEach((card) => {
            card.classList.remove("active");
          });
          clickImg.classList.remove("hidden");
          clikCard.classList.add("active");
        }
      },
    });
}

clickImgs.forEach((clickImg) => {
  clickImg.addEventListener("click", () => {
    animateClickImg(clickImg);
  });
});

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const visibleClickImg = document.querySelector(".click-img:not(.hidden)");
    console.log(visibleClickImg);
    animateClickImg(visibleClickImg, index + 1);
  });
});

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
    x: 384,
    y: -384,
    rotate: 90,
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
    x: -384,
    y: -384,
    rotate: -90,
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
