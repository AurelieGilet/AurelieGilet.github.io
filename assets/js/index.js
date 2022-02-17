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

// BURGER NAVBAR
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

// STICKY NAVBAR
const navbar = document.getElementById("navbar");
const navPosition = navbar.offsetTop;

window.onscroll = function () {
  getSticky();
};

function getSticky() {
  if (window.pageYOffset > navPosition + 95) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// SELECTED MENU COLOR
const navListItems = navList.getElementsByTagName("li");

for (let i = 0; i < navListItems.length; i++) {
  navListItems[i].addEventListener("click", function () {
    let selected = document.getElementsByClassName("selected");
    if (selected.length > 0) {
      selected[0].className = selected[0].className.replace("selected", "");
    }
    this.className += "selected";
  });
}
