// Navigation simulation
const navLinks = document.querySelectorAll(".bottom-nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    alert(`Tu as cliqué sur ${link.textContent}`);
  });
});
// Récupérer les favoris depuis localStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Sélectionner tous les boutons favoris
const favButtons = document.querySelectorAll(".favorite-btn");

// Initialiser l’état des boutons
favButtons.forEach(btn => {
  const schoolId = btn.dataset.school;
  if(favorites.includes(schoolId)){
    btn.classList.add("active");
  }

  // Ajouter le clic
  btn.addEventListener("click", () => {
    if(favorites.includes(schoolId)){
      favorites = favorites.filter(id => id !== schoolId);
      btn.classList.remove("active");
    } else {
      favorites.push(schoolId);
      btn.classList.add("active");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });
});
