AOS.init();

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
const showModal = document.getElementById("show-modal");
const closeModal = document.getElementById("close-modal");
const popUpModal = document.getElementById("popup-modal");

const onToggleMenu = (e) => {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("translate-x-0");
  navLinks.classList.toggle("translate-x-[-100%]");
};

const animation = bodymovin.loadAnimation({
  // animationData: { /* ... */ },
  container: document.getElementById("lottie-container"), // required
  path: "/images/animations/digitalmarketing.json", // required
  renderer: "svg", // required
  loop: true, // optional
  autoplay: true, // optional
  name: "Demo Animation", // optional
});

showModal.addEventListener("click", () => {
  popUpModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  popUpModal.classList.add("hidden");
});

