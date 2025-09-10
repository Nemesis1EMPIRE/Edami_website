// Navigation simulation
const navLinks = document.querySelectorAll(".bottom-nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    alert(`Tu as cliqué sur ${link.textContent}`);
  });
});
