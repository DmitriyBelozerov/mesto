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
            this._toggleButtonState(config);
        } else {
            buttonElement.classList.remove(config.formSubmitDisabled);
            buttonElement.removeAttribute('disabled', false);
        };
    };

    _showInputError(config, input) {
        input.classList.add(config.formInputTypeError);
        const errorElement = input.nextElementSibling;
        errorElement.classList.remove(config.formErrorMessageHiden);
        errorElement.textContent = input.validationMessage;
    }

    _hideInputError(config, input) {
        input.classList.remove(config.formInputTypeError);
        const errorElement = input.nextElementSibling;
        errorElement.classList.add(config.formErrorMessageHiden);
        errorElement.textContent = '';

    };

    _addEventListeners(input, inputs, config) {
        input.addEventListener('input', () => {
            if (this._hasInvalidInput(input)) {
                this._showInputError(config, input);
                this._toggleButton(inputs, this.buttonElement, config);
            } else {
                this._hideInputError(config, input)
                this._toggleButton(inputs, this.buttonElement, config);
            }
        });
    }

    _toggleButtonState(config) {
        this.buttonElement.setAttribute('disabled', true);
        this.buttonElement.classList.add(config.formSubmitDisabled);
    }

    resetValidation(config) {
        this._toggleButtonState(config);
        this.inputs.forEach((input) => {
           this._hideInputError(config, input);
        });
    };

    enableValidation(config) {
        this.inputs.forEach((input) => {
            this._addEventListeners(input, this.inputs, config);
        });
    };

};
