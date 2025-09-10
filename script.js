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
// Charger et afficher les favoris sur favorites.html
function loadFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  let container = document.getElementById("favorites-container");

  if (!container) return; // Si on n'est pas sur favorites.html, on sort

  if (favorites.length === 0) {
    container.innerHTML = "<p>Aucun favori pour l'instant.</p>";
  } else {
    container.innerHTML = favorites.map(schoolId => `
      <div class="school-card">
        <h2>${schoolId}</h2>
        <p>École ou université favorite.</p>
      </div>
    `).join("");
  }
}
