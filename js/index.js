const homepageBtn = document.getElementById("homepage-btn");

homepageBtn.addEventListener("mouseenter", function () {
  const homepageBtnArrow = document.getElementById("homepage-btn-arrow");
  homepageBtnArrow.style.transform = "rotate(90deg)";
});

homepageBtn.addEventListener("mouseleave", function () {
    const homepageBtnArrow = document.getElementById("homepage-btn-arrow");
    homepageBtnArrow.style.transform = "rotate(0deg)";
  });
