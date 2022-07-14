export class FormValidator {
    constructor(config) {
        this._config = config;
    }

};
 








// const validationConfig = {
//     formSubmit: '.form__submit',
//     formInput: '.form__input',
//     form: '.form',
//     formSubmitDisabled: 'form__submit_type_disabled',
//     formInputTypeError: 'form__input_type_error',
//     formErrorMessageHiden: 'form__error-message_hiden'
// };

// const forms = Array.from(document.querySelectorAll(validationConfig.form));


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