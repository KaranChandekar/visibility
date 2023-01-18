AOS.init();

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

const onToggleMenu = (e) => {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("translate-x-0");
  navLinks.classList.toggle("translate-x-[-100%]");
};
