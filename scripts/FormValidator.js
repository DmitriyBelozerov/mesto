export default class FormValidator {
    constructor(config, formElement) {
        config = config;
        this.formElement = formElement;
        this.buttonElement = this.formElement.querySelector(config.formSubmit);
        this.inputs = Array.from(this.formElement.querySelectorAll(config.formInput));
    }

    _hasInvalidInput(element) {
        return !element.validity.valid;
    };

    _hasInvalidForm(inputs) {
        return inputs.some((input) => {
            return !input.validity.valid;
        });
    };

    _toggleButton(inputs, buttonElement, config) {
        if (this._hasInvalidForm(inputs)) {
            buttonElement.classList.add(config.formSubmitDisabled);
            this._toggleButtonState();
        } else {
            buttonElement.classList.remove(config.formSubmitDisabled);
            buttonElement.removeAttribute('disabled', false);
        };
    };

    _showInputError(config, input, errorElement) {
        input.classList.add(config.formInputTypeError);
        errorElement.classList.remove(config.formErrorMessageHiden);
        errorElement.textContent = input.validationMessage;
    }

    _hideInputError(config, input, errorElement) {
        input.classList.remove(config.formInputTypeError);
        errorElement.classList.add(config.formErrorMessageHiden);
        errorElement.textContent = '';

    };

    _addEventListeners(input, inputs, errorElement, config) {
        input.addEventListener('input', () => {
            if (this._hasInvalidInput(input)) {
                this._showInputError(config, input, errorElement);
                this._toggleButton(inputs, this.buttonElement, config);
            } else {
                this._hideInputError(config, input, errorElement)
                this._toggleButton(inputs, this.buttonElement, config);
            }
        });
    }

    _toggleButtonState() {
        this.buttonElement.setAttribute('disabled', true);
    }

    resetValidation() {
        this._toggleButtonState();
        this.inputs.forEach((input) => {
           input.value = '';
        });
    };



    enableValidation(config) {
        this.inputs.forEach((input) => {
            const errorElement = input.nextElementSibling;
            this._addEventListeners(input, this.inputs, errorElement, config);
        });
    };

};
