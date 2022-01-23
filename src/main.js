//https://www.youtube.com/watch?v=-D6oTPA4vXc&t=30s 53:58

const haamburgerButton = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");

function toggleButton() {
  navlist.classList.toggle("show");
}

haamburgerButton.addEventListener("click", toggleButton)