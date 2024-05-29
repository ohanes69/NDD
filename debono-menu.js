let menuBouton = document.getElementById("icon");
let menu = document.querySelector(".liste");

menuBouton.addEventListener("click", function () {
    // Vérifie si la liste est actuellement visible
    if (menu.style.display === "block") {
        // Si c'est le cas, la rend invisible
        menu.style.display = "none";
    } else {
        // Sinon, la rend visible
        menu.style.display = "block";
    }
});

