'use strict';
// Opening and closing the navbar
const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle('active'));

// opening and closing the head scrollbar using javascript code on windows
const $header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// changing the image of heart blinker
document.addEventListener("DOMContentLoaded", function(){
  // Get all like buttons
  const favBtn = document.querySelectorAll(".fav-btn");
  // Images of heart stored in variables
  const heartOutline = "./images/red-outline-heart.png";
  const heartFilled = "./images/red-filled-heart.png";

  // adding click event to each button 
  favBtn.forEach(btn => {
    // setting initial state from localStorage if available
    const card = btn.closest(".card");
    const cardId = Array.from(document.querySelectorAll(".card")).indexOf(card);
    const isLiked = localStorage.getItem(`card-${cardId}-liked`) === "true"; 

    if(isLiked){
      btn.querySelector(".heart-blinker").src = heartFilled;
      btn.classList.add("liked");
    }

    btn.addEventListener("click", function(){
      const heartIcon = this.querySelector(".heart-blinker");
      const isCurrentlyLiked = this.classList.contains("liked");

      if(isCurrentlyLiked){
        // unlike the card
        heartIcon.src = heartOutline;
        this.classList.remove("liked");
        localStorage.setItem(`card-${cardId}-liked`, "false");
      }else{
        // like the card
        heartIcon.src = heartFilled;
        this.classList.add("liked");
        localStorage.setItem(`card-${cardId}-liked`, "true");
      }
    });
  });
});

// creating animation appearance of images in the hero section

const imgchanger = document.querySelector(".js-bg-pattern");
const ArrayImage = [
  {image: "./images/Real estate (1).jpg"},
  {image: "./images/Real estate (2).jpg"},
  {image: "./images/Real estate (3).jpg"},
  {image: "./images/Real estate (4).jpg"},
  {image: "./images/Real estate (5).jpg"},
  {image: "./images/Real estate (6).jpg"},
  {image: "./images/Real estate (7).jpg"},
  {image: "./images/Real estate (8).jpg"}
]

let imageIndex = 0;

function ChangeImage(){
  imgchanger.backgroundImage == ArrayImage[imageIndex];
  imageIndex++;

  if(imageIndex == ArrayImage.length){
    imageIndex = 0;
  }
}

ChangeImage();













