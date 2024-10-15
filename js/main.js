// Burger menu

const nav = document.querySelector("#nav");
const navButton = document.querySelector("#nav-button");
const navButtonImg = document.querySelector("#nav-button-img");

navButton.addEventListener("click", () => {
  if (nav.classList.toggle("open")) {
    navButtonImg.src = "./img/svg/burger-nav-close.svg";
  } else {
    navButtonImg.src = "./img/svg/burger-nav.svg";
  }
});

//FAQ

const faqButtons = document.querySelectorAll(".faq__button");
const faqAnswers = document.querySelectorAll(".faq__answer");

faqButtons.forEach((faqButton, i) => {
  faqButton.addEventListener("click", () => {
    if (faqButton.classList.contains("open")) {
      faqButton.classList.remove("open");
      faqAnswers[i].classList.remove("open");
    } else {
      faqButtons.forEach((faqButton) => {
        faqButton.classList.remove("open");
      });
      faqAnswers.forEach((faqAnswer) => {
        faqAnswer.classList.remove("open");
      });
      faqButton.classList.add("open");
      faqAnswers[i].classList.add("open");
    }
    // faqButton.nextElementSibling.classList.toggle("open");
  });
});
