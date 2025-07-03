const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
const sidemenu = document.getElementById("sidemenu");
const openIcon = document.querySelector(".nav-expand");
const closeIcon = document.querySelector(".nav-close");
const toggleButtons = document.querySelectorAll(".toggle-button");

function opentab(event, tabname) {
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
    tabcontents[i].classList.remove("active-tab");

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
}

function openmenu() {
  sidemenu.style.right = 0;
}

function closemenu() {
  sidemenu.style.right = "-100%";
}

openIcon.addEventListener("click", (event) => {
  openmenu();
});

closeIcon.addEventListener("click", (event) => {
  closemenu();
});

document.addEventListener("click", function (event) {
  console.log(event.target);
  const isClickInside =
    sidemenu.contains(event.target) || openIcon.contains(event.target);

  if (!isClickInside) {
    closemenu();
  }
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
