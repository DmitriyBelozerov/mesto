const forms = Array.from(document.querySelectorAll('.form'));

const hasInvalidInput = (formInput) => {
    return formInput.some((inputItem) => {
        return !inputItem.validity.valid;
    });
};

const toggleButton = (formInput, buttonElement) => {
    if (hasInvalidInput(formInput)) {
        buttonElement.classList.add('form__submit_type_disabled');
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove('form__submit_type_disabled');
        buttonElement.removeAttribute('disabled', false);
    };
};

const showInputError = (inputItem, errorElement) => {
    inputItem.classList.add('form__input_type_error');
    errorElement.classList.remove('error-message__hiden');
    errorElement.textContent = inputItem.validationMessage;
};

const hideInputError = (inputItem, errorElement) => {
    inputItem.classList.remove('form__input_type_error');
    errorElement.classList.add('error-message__hiden');
    errorElement.textContent = inputItem.validationMessage;
};

forms.forEach((formItem) => {
    const buttonElement = formItem.querySelector('.form__submit');
    const formInput = Array.from(formItem.querySelectorAll('.form__input'));
    formInput.forEach((inputItem) => {
        const errorElement = inputItem.nextElementSibling;
        inputItem.addEventListener('input', function (evt) {
            if (hasInvalidInput(formInput)) {
                showInputError(inputItem, errorElement);
                toggleButton(formInput, buttonElement);
            } else {
                hideInputError(inputItem, errorElement);
                toggleButton(formInput, buttonElement);
            }
        });
    }
    );
}
);