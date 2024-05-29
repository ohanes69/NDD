// Sélection du lien des conditions générales de vente
const conditionsLink = document.getElementById("conditions-link");

// Sélection de la pop-up
const popup = document.getElementById("popup");

// Sélection du bouton de fermeture de la pop-up
const closeButton = document.getElementById("close-button");

// Ajout d'un gestionnaire d'événement de clic sur le lien des mentions légales
conditionsLink.addEventListener("click", function (event) {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
    // Afficher la pop-up
    popup.style.display = "block";

    document.getElementById("footer").classList.add("centered-footer");
});

// Ajout d'un gestionnaire d'événement de clic sur le bouton de fermeture de la pop-up
closeButton.addEventListener("click", function () {
    // Masquer la pop-up
    popup.style.display = "none";
});

// Ajout d'un gestionnaire d'événement de clic sur le bouton de fermeture de la pop-up
closeButton.addEventListener("click", function (event) {
    // Empêcher le comportement par défaut du bouton (défilement vers le haut ou rechargement de la page)
    event.preventDefault();
    // Masquer la pop-up
    popup.style.display = "none";
});