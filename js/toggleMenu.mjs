const navLinks = document.querySelector(".nav-links");

function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[9%]");
}

// Legg til event listener til ikonet
document.querySelector(".menu-icon").addEventListener("click", function () {
  onToggleMenu(this);
});
