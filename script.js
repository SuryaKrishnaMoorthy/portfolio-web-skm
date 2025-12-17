const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
const sidemenu = document.getElementById("sidemenu");
const openIcon = document.querySelector(".nav-expand");
const closeIcon = document.querySelector(".nav-close");
const toggleButtons = document.querySelectorAll(".toggle-button");

let isMenuOpen = false;
let lastScreenWidth = window.innerWidth;

function openmenu() {
  if (window.innerWidth < 700) {
    sidemenu.style.right = "0";
    isMenuOpen = true;
  }
}
function closemenu() {
  if (window.innerWidth < 700) {
    sidemenu.style.right = "-100%";
    isMenuOpen = false;
  }
}

openIcon.addEventListener("click", openmenu);
closeIcon.addEventListener("click", closemenu);
document.addEventListener("click", function (event) {
  const isClickInside =
    sidemenu.contains(event.target) || openIcon.contains(event.target);

  if (window.innerWidth < 700 && !isClickInside) {
    closemenu();
  }
});

const handleResize = () => {
  const width = window.innerWidth;

  // Moving to desktop
  if (width >= 700 && lastScreenWidth < 700) {
    sidemenu.style.right = "0";
    sidemenu.style.display = "flex";
    isMenuOpen = false;
  }

  //Moving to mobile
  if (width <= 700 && lastScreenWidth > 700) {
    sidemenu.style.display = "block";
    sidemenu.style.right = "-100%"; //start closed
    isMenuOpen = false;
  }
  lastScreenWidth = width;
};
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Close the side menu when any menuitem is clicked on mobile.
const menuLinks = sidemenu.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 700) {
      closemenu();
    }
  });
});

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const button = e.currentTarget;

    // Get the ID of the controlled element
    const listId = button.getAttribute("aria-controls");
    const detailsList = document.getElementById(listId);

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Toggle hidden class
    detailsList.classList.toggle("hidden");

    // Update aria-expanded attribute
    button.setAttribute("aria-expanded", !isExpanded);
  });
});

function opentab(event, tabname) {
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
    tabcontents[i].classList.remove("active-tab");

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
}

// Ensure correct initial menu state on first load
function initializeMenuState() {
  if (window.innerWidth < 700) {
    sidemenu.style.display = "block";
    sidemenu.style.right = "-100%"; // start hidden
    isMenuOpen = false;
  } else {
    sidemenu.style.display = "flex";
    sidemenu.style.right = "0"; // desktop view
    isMenuOpen = false;
  }
}

initializeMenuState(); // run immediately on page load
