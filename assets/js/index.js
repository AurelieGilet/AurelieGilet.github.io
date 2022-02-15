// LANDING PAGE BUTTON
const homepageBtn = document.getElementById("homepage-btn");

homepageBtn.addEventListener("mouseenter", function () {
  const homepageBtnArrow = document.getElementById("homepage-btn-arrow");
  homepageBtnArrow.style.transform = "rotate(90deg)";
});

homepageBtn.addEventListener("mouseleave", function () {
    const homepageBtnArrow = document.getElementById("homepage-btn-arrow");
    homepageBtnArrow.style.transform = "rotate(0deg)";
  });

// BURGER NAV
const burgerBtn = document.getElementById("burger-btn");
const navList = document.getElementById("nav-list");

if (burgerBtn != null) {
  burgerBtn.addEventListener("click", () => {
    animateBurger();
    menuDisplay();
  });

  window.addEventListener("click", function (event) {
    if (!burgerBtn.contains(event.target)) {
      burgerBtn.classList.remove("change");
      navList.classList.remove("nav-list-show");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      burgerBtn.classList.remove("change");
      navList.classList.remove("nav-list-show");
    }
  });
}

function animateBurger() {
  burgerBtn.classList.toggle("change");
}

function menuDisplay() {
  if (navList.classList.contains("nav-list-show")) {
    navList.classList.remove("nav-list-show");
  } else {
    navList.classList.add("nav-list-show");
  }
}
