// Objet avec toutes les écoles et leurs posts
const schools = {
  "omar_bongo": {
    name: "Université Omar Bongo",
    logo: "logo_univ.jpg",
    description: "Université publique fondée en 1970, Libreville, Gabon",
    posts: [
      " Journée portes ouvertes ce samedi !",
      "Inscriptions pour le nouveau semestre ouvertes jusqu’au 15 septembre."
    ]
  },
  "ens": {
    name: "École Normale Supérieure",
    logo: "logo_ens.jpg",
    description: "École prestigieuse formant les enseignants et chercheurs du Gabon",
    posts: [
      " Nouveau programme pédagogique pour la rentrée.",
      " Inscription aux clubs universitaires ouverte."
    ]
  },
  "ist": {
    name: "Institut Supérieur de Technologie",
    logo: "logo_ist.jpg",
    description: "Institut spécialisé dans les technologies et l’ingénierie",
    posts: [
      " Nouveau laboratoire de robotique inauguré aujourd’hui.",
      " Concours interne de programmation la semaine prochaine."
    ]
  }
};

// Récupérer l’école depuis l’URL
const params = new URLSearchParams(window.location.search);
const schoolId = params.get("id"); // ex: school.html?id=omar_bongo

if(schoolId && schools[schoolId]){
  const school = schools[schoolId];
  document.getElementById("school-name").textContent = school.name;
  document.getElementById("school-description").textContent = school.description;
  document.getElementById("school-logo").src = school.logo;

  const postsContainer = document.getElementById("school-posts");
  school.posts.forEach(postText => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.textContent = postText;
    postsContainer.appendChild(postDiv);
  });
} else {
  // école non trouvée
  document.querySelector(".school-profile").innerHTML = "<p>École introuvable.</p>";
}
