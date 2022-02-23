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

homepageBtn.addEventListener("click", function() {
  let selected = document.getElementsByClassName("selected");
    if (selected.length > 0) {
      selected[0].className = selected[0].className.replace("selected", "");
    }
    navListItems[1].className += "selected";
})

// PROJECTS OVERLAY
const body = document.getElementsByClassName("body");
const overlay = document.getElementsByClassName("overlay");

for (let i = 0; i < body.length; i++) {
  body[i].addEventListener("mouseover", function() {
    overlay[i].style.display = "flex";
  });
  body[i].addEventListener("mouseout", function() {
    overlay[i].style.display = "none";
  });
}

// PROJECTS TECHNOLOGY SORTING

function getElementWidth(element) {
  const style = window.getComputedStyle(element);

  return element.offsetWidth + parseInt(style.margin);
}

function getBestFit(elements, availableSpace) {
  let minAvailableSpace = availableSpace;
  let bestFitIndex = -1;

  elements.forEach((element, i) => {
    if (element.used) {
      return;
    }

    const elementAvailableSpace = availableSpace - element.width;

    if (elementAvailableSpace >= 0 && elementAvailableSpace < minAvailableSpace) {
      minAvailableSpace = elementAvailableSpace;
      bestFitIndex = i;
    }
  });

  return bestFitIndex;
}

function getFirstNotUsed(elements) {
  for (let element of elements) {
    if (!element.used) {
      return element;
    }
  }
}

const technologyList = document.getElementById('technology-list');
const totalSpace = technologyList.clientWidth;
const items = Array.from(technologyList.children).map((element) => {
  return {
    element,
    used: false,
    width: getElementWidth(element),
  };
});
const totalItems = items.length;
const firstItem = items[0];
const sortedElements = [firstItem.element];

firstItem.used = true;

let availableSpace = totalSpace - firstItem.width;

for (let i = 1; i < totalItems; ++i) {
  const bestFitIndex = getBestFit(items, availableSpace);
  
  let item;
  
  if (bestFitIndex === -1) {
    item = getFirstNotUsed(items);
    availableSpace = totalSpace - item.width;
  } else {
    item = items[bestFitIndex];
    availableSpace -= item.width;
  }
  
  sortedElements.push(item.element);  
  item.used = true;
}

sortedElements.forEach((element) => {
  
  technologyList.appendChild(element);
});

