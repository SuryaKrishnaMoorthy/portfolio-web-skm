const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab(event, tabname) {
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
    tabcontents[i].classList.remove("active-tab");

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
}

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = 0;
}

function closemenu() {
  sidemenu.style.right = "-100%";
}
