
export class FormValidator {
    constructor(config, element) {
        this._config = config;
        this._element = element;

    }

    _hasInvalidInput(element) {
        return !element.validity.valid;
    };

    _hasInvalidForm(formInput) {
        return formInput.some((element) => {
            return !element.validity.valid;
        });
    };

    _toggleButton(formInput, buttonElement, config) {
        if (_hasInvalidForm(formInput)) {
            buttonElement.classList.add(config.formSubmitDisabled);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(config.formSubmitDisabled);
            buttonElement.removeAttribute('disabled', false);
        };
    };

    _showInputError(_element, errorElement, config) {
        this._element.classList.add(config.formInputTypeError);
        errorElement.classList.remove(config.formErrorMessageHiden);
        errorElement.textContent = inputItem.validationMessage;
    };

    _hideInputError(_element, errorElement, config) {
        this._element.classList.remove(config.formInputTypeError);
        errorElement.classList.add(config.formErrorMessageHiden);
        errorElement.textContent = '';
    };


    enableValidation(element, config) {
        const errorElement = this._element.nextElementSibling;
        this._invalid = this._hasInvalidInput(element);
        console.log(this._invalid);
        // this._element.addEventListener('input', function () {
        //     if (this._invalid(element)) {
        //         _showInputError(element, errorElement, config);
        //         _toggleButton(formInputs, buttonElement, config);
        //     } else {
        //         _hideInputError(element, errorElement, config);
        //         _toggleButton(formInputs, buttonElement, config);
        //     }
        // });
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