const forms = Array.from(document.querySelectorAll('.form'));
const config = {    
    formSubmit: '.form__submit',
    formInput: '.form__input'      
  };

const hasInvalidInput = (inputItem) => {
    return !inputItem.validity.valid;
};

const hasInvalidForm = (formInput) => {
    return formInput.some((inputItem) => {
        return !inputItem.validity.valid;
    });
};

const toggleButton = (formInput, buttonElement) => {
    if (hasInvalidForm(formInput)) {
        buttonElement.classList.add('form__submit_type_disabled');
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove('form__submit_type_disabled');
        buttonElement.removeAttribute('disabled', false);
    };
};

const showInputError = (inputItem, errorElement) => {
    inputItem.classList.add('form__input_type_error');
    errorElement.classList.remove('form__error-message_hiden');
    errorElement.textContent = inputItem.validationMessage;
};

const hideInputError = (inputItem, errorElement) => {
    inputItem.classList.remove('form__input_type_error');
    errorElement.classList.add('form__error-message_hiden');
    errorElement.textContent = '';
};






function enableValidation (config)  {
    forms.forEach((formItem) => {
    const buttonElement = formItem.querySelector(config.formSubmit);
    const formInputs = Array.from(formItem.querySelectorAll(config.formInput));
    formInputs.forEach((inputItem) => {
        const errorElement = inputItem.nextElementSibling;
        inputItem.addEventListener('input', function (evt) {
            if (hasInvalidInput(inputItem)) {
                showInputError(inputItem, errorElement);
                toggleButton(formInputs, buttonElement);
            } else {
                hideInputError(inputItem, errorElement);
                toggleButton(formInputs, buttonElement);
            }
        });
    }
    );
}
);}

enableValidation(config); 







