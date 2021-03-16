function validateForm() {

    let email = document.querySelector(".form__item.--email");
    let errorEmail = email.querySelector(".form__error-message.--wrong");
    let errorIconEmail = email.querySelector(".form__error-icon");
    let formItems = document.querySelectorAll(".form__item");

    for(let i = 0; i < formItems.length; i++) {

        let formInput = formItems[i].querySelector(".form__input");
        let errorEmpty = formItems[i].querySelector(".form__error-message.--empty");
        let errorIcon = formItems[i].querySelector(".form__error-icon");

        // Check for empty fields
        if(formInput.value != "") {
            errorEmpty.classList.add("--hidden");
            errorIcon.classList.add("--hidden");
            formInput.classList.remove("--error");

            // Validate email format
            if(formItems[i].classList.contains("--email")) {
                if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+) *$/.test(formInput.value)) {
                    errorEmail.classList.add("--hidden");
                    errorIconEmail.classList.add("--hidden");
                    formInput.classList.remove("--error");
                } else {
                    errorEmail.classList.remove("--hidden");
                    errorIconEmail.classList.remove("--hidden");
                    formInput.classList.add("--error");
                }
            }
        } else {
            errorEmpty.classList.remove("--hidden");
            errorIcon.classList.remove("--hidden");
            formInput.classList.add("--error");
        }
    }
    return(false)
}

let button = document.querySelector(".button.--form");
button.addEventListener("click", validateForm);
