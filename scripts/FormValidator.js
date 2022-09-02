
export class FormValidator {
    constructor(config, inputElement) {
        config = config;
        this.inputElement = inputElement;
        this.errorElement = this.inputElement.nextElementSibling;
        this.buttonElement = this.inputElement.parentElement.querySelector(config.formSubmit);

    }

    _hasInvalidInput(element) {
        return !element.validity.valid;
    };

    _showInputError(config) {
        this.inputElement.classList.add(config.formInputTypeError);
        this.errorElement.classList.remove(config.formErrorMessageHiden);
        this.errorElement.textContent = this.inputElement.validationMessage;
    }

    _hideInputError(config) {
        this.inputElement.classList.remove(config.formInputTypeError);
        this.errorElement.classList.add(config.formErrorMessageHiden);
        this.errorElement.textContent = '';

    };


    enableValidation(config) {
        if (this._hasInvalidInput(this.inputElement)) {
            this._showInputError(config);
        } else {
            this._hideInputError(config);
        }
    };




};










//const forms = Array.from(document.querySelectorAll(validationConfig.form));


// const hasInvalidInput = (inputItem) => {
//     return !inputItem.validity.valid;
// };

// const hasInvalidForm = (formInput) => {
//     return formInput.some((inputItem) => {
//         return !inputItem.validity.valid;
//     });
// };

// const toggleButton = (formInput, buttonElement, validationConfig) => {
//     if (hasInvalidForm(formInput)) {
//         buttonElement.classList.add(validationConfig.formSubmitDisabled);
//         buttonElement.setAttribute('disabled', true);
//     } else {
//         buttonElement.classList.remove(validationConfig.formSubmitDisabled);
//         buttonElement.removeAttribute('disabled', false);
//     };
// };

// const showInputError = (inputItem, errorElement, validationConfig) => {
//     inputItem.classList.add(validationConfig.formInputTypeError);
//     errorElement.classList.remove(validationConfig.formErrorMessageHiden);
//     errorElement.textContent = inputItem.validationMessage;
// };

// const hideInputError = (inputItem, errorElement, validationConfig) => {
//     inputItem.classList.remove(validationConfig.formInputTypeError);
//     errorElement.classList.add(validationConfig.formErrorMessageHiden);
//     errorElement.textContent = '';
// };

// function enableValidation(validationConfig) {
//     forms.forEach((formItem) => {
//         const buttonElement = formItem.querySelector(validationConfig.formSubmit);
//         const formInputs = Array.from(formItem.querySelectorAll(validationConfig.formInput));
//         formInputs.forEach((inputItem) => {
//             const errorElement = inputItem.nextElementSibling;
//             inputItem.addEventListener('input', function (evt) {
//                 if (hasInvalidInput(inputItem)) {
//                     showInputError(inputItem, errorElement, validationConfig);
//                     toggleButton(formInputs, buttonElement, validationConfig);
//                 } else {
//                     hideInputError(inputItem, errorElement, validationConfig);
//                     toggleButton(formInputs, buttonElement, validationConfig);
//                 }
//             });
//         }
//         );
//     }
//     );
// }

// enableValidation(validationConfig);