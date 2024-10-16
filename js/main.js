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
  });
});

// Modal

const modalCloseBtn = document.querySelector(".modal-close-btn");
const singupModalCloseBtn = document.querySelector(".signup-modal-close-btn");
const openLoginModalBtn = document.querySelector("#login-button");
const openSignupModalBtn = document.querySelector("#signup-button");
const loginModal = document.querySelector(".login-modal");
const signupModal = document.querySelector(".signup-modal");
const overlay = document.querySelector(".overlay");

const openModal = (modal) => {
  if (modal === "login") {
    loginModal.classList.remove("hidden");
  } else if (modal === "signup") {
    signupModal.classList.remove("hidden");
  }
  overlay.classList.remove("hidden");
};

const closeModal = (modal) => {
  if (modal === "login") {
    loginModal.classList.add("hidden");
  } else if (modal === "signup") {
    signupModal.classList.add("hidden");
  } else {
    loginModal.classList.add("hidden");
    signupModal.classList.add("hidden");
  }
  overlay.classList.add("hidden");
};

openLoginModalBtn.addEventListener("click", () => openModal("login"));
openSignupModalBtn.addEventListener("click", () => openModal("signup"));
modalCloseBtn.addEventListener("click", () => closeModal("login"));
singupModalCloseBtn.addEventListener("click", () => closeModal("signup"));
overlay.addEventListener("click", closeModal);

// LogIn SingUp Locallstorage

const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#new-name").value;
  const email = document.querySelector("#new-email").value;
  const phone = document.querySelector("#new-phone").value;
  const password = document.querySelector("#new-password").value;

  const newUser = {
    name,
    email,
    phone,
    password,
  };

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!foundUser) {
    users.push(newUser);
    Toastify({
      text: `User ${name} created successfully`,
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
  } else {
    Toastify({
      text: `User with email ${email} already exists`,
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
  }

  localStorage.setItem("users", JSON.stringify(users));

  closeModal("signup");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!foundUser) {
    Toastify({
      text: "Incorrect email or password",
      duration: 3000,

      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  } else {
    Toastify({
      text: `Welcome ${foundUser.name} !`,
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
  }

  closeModal("login");
});

// Scroll up button

const scrollUpBtn = document.querySelector("#scroll-btn");

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const userScrollDown = () => {
  if (window.scrollY > 5000) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};
