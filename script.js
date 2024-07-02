const date = document.querySelector(".date");
const time = document.querySelector(".time");
const year = document.querySelector(".year");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const headerNav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".header-nav a");

setInterval(function updateTimeAndDay() {
  const today = new Date();

  //   current time
  const currentTime = today.toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  time.textContent = currentTime;

  //   current day
  const currentDay = today.toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "long",
  });

  date.textContent = currentDay;

  //   current year
  const currentYear = today.getFullYear();
  year.textContent = currentYear;
}, 1000);

/////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////
// Mobile Menu //

// open menu
openMenu.addEventListener("click", () => {
  headerNav.classList.add("active");
});

// close menu
const closeMenuBar = () => {
  headerNav.classList.remove("active");
};

closeMenu.addEventListener("click", closeMenuBar);
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeMenuBar);
});
