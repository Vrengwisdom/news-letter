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
});

// check if email is valid
function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

function showModal() {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
}

// close modal
const hide = document.getElementById("dismiss-btn");
hide.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.close();
});

// Optional: Close modal when clicking outside of it
const dialog = document.querySelector("dialog");
dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
      && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      dialog.close();
    }
});

function updateEmailOnDialog() {
    emailOnDialog.textContent = email.value;
}
