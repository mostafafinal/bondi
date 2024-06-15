// Navbar
const navbarItems = document.querySelectorAll(".navbar-nav li");
navbarItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    activeSate(event);
    document.querySelector(event.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
    document.querySelector(".navbar-collapse").classList.remove("show");
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

// Scroll To Top Button
let scrollArrow = document.createElement("span");
document.body.appendChild(scrollArrow);
this.onscroll = () => {
  this.scrollY >= 400
    ? scrollArrow.classList.add("to-top")
    : scrollArrow.classList.remove("to-top");
};
scrollArrow.onclick = () => {
  window.scrollTo({
    top: 0,
  });
};

// Active Buttons Function
function activeSate(event) {
  event.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  event.target.classList.add("active");
}
