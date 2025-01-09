document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let formFirstName = document.getElementById("first-name").value.trim();
    let formLastName = document.getElementById("last-name").value.trim();
    let formEmail = document.getElementById("email").value.trim();
    let formPhone = document.getElementById("phone").value.trim();
    let formMessage = document.getElementById("message").value.trim();

    let firstNameRegex = /^[a-zA-ZÀ-ÿ' -]+$/;
    let lastNameRegex = /^[a-zA-ZÀ-ÿ', -]+$/;
    let phoneRegex = /^\+?[0-9 ]{9,20}$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    document.getElementById("first-name-error").classList.add("hidden");
    document.getElementById("last-name-error").classList.add("hidden");
    document.getElementById("email-error").classList.add("hidden");
    document.getElementById("phone-error").classList.add("hidden");
    document.getElementById("message-error").classList.add("hidden");

    let isValid = true;
    if (formFirstName.length < 2 || !firstNameRegex.test(formFirstName))
    {
        document.getElementById("first-name-error").classList.remove("hidden");
        isValid = false;
    }
    if (formLastName.length < 2 || !lastNameRegex.test(formLastName))
    {
        document.getElementById("last-name-error").classList.remove("hidden");
        isValid = false;

    }
    if (!emailRegex.test(formEmail))
    {
        document.getElementById("email-error").classList.remove("hidden");
        isValid = false;
    }
    if (!phoneRegex.test(formPhone))
    {
        document.getElementById("phone-error").classList.remove("hidden");
        isValid = false;
    }
    if (formMessage.length < 1)
    {
        document.getElementById("message-error").classList.remove("hidden");
        isValid = false;
    }
    if (isValid)
    {
        let subject = `Message de ${formFirstName} ${formLastName}`;
        let body = `${formMessage}`;

        // Créer le lien mailto
        let mailtoLink = `mailto:myparrainage@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Ouvrir le client mail avec le lien mailto
        window.location.href = mailtoLink;
    }
})
