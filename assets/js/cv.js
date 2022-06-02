// NAVIGATION BUTTON
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");

leftArrow.addEventListener("click", () => {
    let page1Display = window.getComputedStyle(page1).display;

    if (page1Display !== "flex") {
        page1.style.display = "flex";
        page2.style.display = "none";
    }
});

rightArrow.addEventListener("click", () => {
    let page2Display = window.getComputedStyle(page2).display;

    if (page2Display !== "flex") {
        page2.style.display = "flex"
        page1.style.display = "none";
    }
})