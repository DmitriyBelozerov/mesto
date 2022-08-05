
export class FormValidator {
    constructor(config, element, formItem) {
        this._config = config;
        this._element = element;
        this._formItem = formItem;

    }

    _hasInvalidInput(_element) {
        return !this._element.validity.valid;
    };

    // _hasInvalidForm(_formItem) {
    //     return _formItem.some(_element => {
    //         return !this._element.validity.valid;
    //     });
    // };



    // _toggleButton(formInput, buttonElement, config) {
    //     if (_hasInvalidForm(formInput)) {
    //         buttonElement.classList.add(config.formSubmitDisabled);
    //         buttonElement.setAttribute('disabled', true);
    //     } else {
    //         buttonElement.classList.remove(config.formSubmitDisabled);
    //         buttonElement.removeAttribute('disabled', false);
    //     };
    // };

    _showInputError(_element, errorElement, _config) {
        this._element.classList.add(_config.formInputTypeError);
        errorElement.classList.remove(_config.formErrorMessageHiden);
        errorElement.textContent = this._element.validationMessage;
    };

    _hideInputError(_element, errorElement, _config) {
        this._element.classList.remove(_config.formInputTypeError);
        errorElement.classList.add(_config.formErrorMessageHiden);
        errorElement.textContent = '';
    };


    enableValidation(_element, _config, _formItem) {
        const errorElement = this._element.nextElementSibling;
        this._invalidInput = this._hasInvalidInput(_element);
        this._inputError = this._showInputError(_element, errorElement, _config);
        this._invalidForm = this._formItem;

        this._element.addEventListener('input', () => {
            if (this._invalidInput) {
                this._inputError;
                // _toggleButton(formInputs, buttonElement, config);
            } else {
                _hideInputError(_element, errorElement, _config);
                // _toggleButton(formInputs, buttonElement, config);
            }
        });
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