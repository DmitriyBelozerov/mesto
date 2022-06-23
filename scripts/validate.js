const form = Array.from(document.querySelectorAll('.form'));

form.forEach((formItem) => {
    const buttonElement = formItem.querySelector('.form__submit');
    const formInput = Array.from(formItem.querySelectorAll('.form__input'));

    formInput.forEach((inputItem) => {
        inputItem.addEventListener('input', function (evt) {
            
            if (!evt.target.validity.valid && (inputItem.textContent == '')) {
                inputItem.classList.add('form__input_type_error');
                inputItem.nextElementSibling.classList.remove('error-message__hiden');
                inputItem.nextElementSibling.textContent = inputItem.validationMessage;
                buttonElement.setAttribute('disabled', true);
                buttonElement.classList.add('form__submit_type_disabled');

            }
            else {
                inputItem.classList.remove('form__input_type_error');
                inputItem.nextElementSibling.classList.add('error-message__hiden')
                inputItem.nextElementSibling.textContent = '';
                buttonElement.removeAttribute('disabled', false);
                buttonElement.classList.remove('form__submit_type_disabled');
            }
        });
    }
    );
}
);





















// const SubmitProfile = document.querySelector('.form__submit_profile');
// const inputList = Array.from(document.querySelectorAll('.form__input'));


// const enableValidation = inputElement => {
//     return inputElement.checkValidity();
// }

// const showError = (inputElement) => {
//     const errorElement = document.querySelector(`#${inputElement.id}-error`);
//     errorElement.classList.remove('error-message__hiden');
//     errorElement.textContent = 'Hello';
// }



// SubmitProfile.addEventListener('click', () => {
//     let itisFormValid = true;

//     inputList.forEach(inputElement => {
//         if (!enableValidation(inputElement)) {
//             itisFormValid = false;
//             //showError(inputElement);
//         }
//     });

//     console.log(itisFormValid);
// })







/*const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('error-message__hiden');
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('error-message__hiden');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => { //проверка при изменении полей
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('button_inactive');
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove('button_inactive');
        buttonElement.setAttribute('disabled', false);
    };
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = Array.from(formElement.querySelector('.form__submit'));
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            //toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll('.form__sending'));

        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet);
        });

    });
};

enableValidation();*/