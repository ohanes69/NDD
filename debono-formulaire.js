document.getElementById("boutonEnvoyer").addEventListener("click", function (event) {
    // Empêcher le formulaire de se soumettre
    event.preventDefault();

    // Récupérer les valeurs des champs
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;

    // Afficher les valeurs dans la console
    console.log("Prénom : " + prenom);
    console.log("Nom : " + nom);
    console.log("Email : " + email);

    // Vous pouvez utiliser ces valeurs comme bon vous semble, par exemple les envoyer à un serveur via une requête AJAX

    // Vérifier si les champs prénom et nom ont au moins deux caractères
    if (prenom.length < 2 || nom.length < 2) {
        document.getElementById("prenomError").textContent = "Veuillez entrer un prénom valide.";
        document.getElementById("nomError").textContent = "Veuillez entrer un nom valide.";
        return; // Arrêtez l'exécution de la fonction si la condition n'est pas remplie
    } else {
        // Si les champs sont valides, effacez les messages d'erreur
        document.getElementById("prenomError").textContent = "";
        document.getElementById("nomError").textContent = "";
    }

    // Vérifier si des chiffres sont présents dans les champs prénom et nom
    if (/[\d]/.test(prenom) || /[\d]/.test(nom)) {
        document.getElementById("prenomError").textContent = "Le prénom ne doit pas contenir de chiffres.";
        document.getElementById("nomError").textContent = "Le nom ne doit pas contenir de chiffres.";
        return; // Arrêter l'exécution de la fonction si la condition n'est pas remplie
    } else {
        // Si les champs sont valides, effacez les messages d'erreur
        document.getElementById("prenomError").textContent = "";
        document.getElementById("nomError").textContent = "";
    }

    // Vérifier si l'email est valide
    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,}$/.test(email)) {
        document.getElementById("emailError").textContent = "Veuillez entrer une adresse e-mail valide.";
        return; // Arrêter l'exécution de la fonction si l'email n'est pas valide
    } else {
        // Si les champs sont valides, effacez les messages d'erreur
        document.getElementById("emailError").textContent = "";
    }

    // Réinitialiser les valeurs des champs du formulaire
    document.getElementById("prenom").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("email").value = "";

    // Créer l'URL mailto avec le sujet
    var urlMailto = "mailto:ndd.informations@gmail.com";

    // Ouvrir le client de messagerie par défaut avec l'URL mailto
    window.location.href = urlMailto;
});