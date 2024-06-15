// Navbar
const navbarItems = document.querySelectorAll(".navbar-nav li");
navbarItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    activeSate(event);
    document.querySelector(event.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Gallery btns
const galleryBtns = document.querySelectorAll(".navbtns .btn");
galleryBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    activeSate(event);
    document.querySelectorAll(".row.photos").forEach((section) => {
      section.style.display = "none";
    });
    document
      .querySelector(`.row.photos.${event.target.dataset.section}`)
      .style.setProperty("display", "flex", "important");
  });
});
function activeSate(event) {
  event.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  event.target.classList.add("active");
}
