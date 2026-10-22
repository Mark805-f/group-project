function validation(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    const validNameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nameValid = validNameRegex.test(name);
    const emailValid = validEmailRegex.test(email);

    document.getElementById("name_error").style.visibility =
        nameValid ? "hidden" : "visible";

    nameInput.style.border =
        nameValid ? "1px solid black" : "2px solid red";

    document.getElementById("email_error").style.visibility =
        emailValid ? "hidden" : "visible";

    emailInput.style.border =
        emailValid ? "1px solid black" : "2px solid red";

    if (!nameValid || !emailValid) {
        return false;
    }

    alert("Your form passed validation!");

    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", validation);
});