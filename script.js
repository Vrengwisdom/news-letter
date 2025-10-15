const form = document.getElementById("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".error-message");
const emailOnDialog = document.getElementById("user-email");

// form submit event listener
form.addEventListener("submit", (e) =>{
    // prevent form submission
    e.preventDefault();

    emailError.innerHTML = "";

    if (!email.value.trim() || !isValidEmail(email.value)) {
        emailError.innerHTML = 'Enter a valid email address.';
        return;
    }
    
    // if validation passes, submit form
    updateEmailOnDialog();
    showModal();
    form.reset();
});


// check if email is valid
function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

// show modal
const dialog = document.getElementById("dialog");
const overlay = document.getElementById("overlay");
function showModal() {
    dialog.classList.replace("dialog","open");
    overlay.classList.add("overlay")
}

// close modal via the dismiss button (defensive)
const hide = document.getElementById("dismiss-btn");
hide.addEventListener("click", () =>{
    dialog.classList.replace("open", "dialog");
    overlay.classList.remove("overlay");
});

// update email on success messege
function updateEmailOnDialog() {
    emailOnDialog.textContent = email.value;
}
