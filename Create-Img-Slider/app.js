const carouselSilide = document.querySelector(".carousel-slide");
const carouselImage = document.querySelectorAll(".carousel-slide img");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter
let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSilide.style.transform = "translateX(" + -size * counter + "px)";

//Button Listeners

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImage.length - 1) return;
  carouselSilide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSilide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSilide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSilide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSilide.addEventListener("transitionend", () => {
  if (carouselImage[counter].id === "lastClone") {
    carouselSilide.style.transition = "none";
    counter = carouselImage.length - 2;
    carouselSilide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImage[counter].id === "firstClone") {
    carouselSilide.style.transition = "none";
    counter = carouselImage.length - counter;
    carouselSilide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
