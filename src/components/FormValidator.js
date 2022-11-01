export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this.formElement = formElement;
        this._buttonElement = this.formElement.querySelector(this._config.formSubmit);
        this._inputs = Array.from(this.formElement.querySelectorAll(this._config.formInput));
    }

    _hasInvalidInput(element) {
        return !element.validity.valid;
    };

    _hasInvalidForm(inputs) {
        return inputs.some((input) => {
            return !input.validity.valid;
        });
    };

    _toggleButton() {
        if (this._hasInvalidForm(this._inputs)) {
            this._disableButton();
        } else {
            this._buttonElement.classList.remove(this._config.formSubmitDisabled);
            this._buttonElement.removeAttribute('disabled', false);
        };
    };

    _showInputError(input) {
        input.classList.add(this._config.formInputTypeError);
        const errorElement = input.nextElementSibling;
        errorElement.classList.remove(this._config.formErrorMessageHiden);
        errorElement.textContent = input.validationMessage;
    }

    _hideInputError(input) {
        input.classList.remove(this._config.formInputTypeError);
        const errorElement = input.nextElementSibling;
        errorElement.classList.add(this._config.formErrorMessageHiden);
        errorElement.textContent = '';

    };

    _addEventListeners(input) {
        input.addEventListener('input', () => {
            if (this._hasInvalidInput(input)) {
                this._showInputError(input);
                this._toggleButton(this._inputs);
            } else {
                this._hideInputError(input)
                this._toggleButton(this._inputs);
            }
        });
    }

    _disableButton() {
        this._buttonElement.setAttribute('disabled', true);
        this._buttonElement.classList.add(this._config.formSubmitDisabled);
    }

    resetValidation() {
        this._disableButton();
        this._inputs.forEach((input) => {
           this._hideInputError(input);
        });
    };

    enableValidation() {
        this._inputs.forEach((input) => {
            this._addEventListeners(input);
        });
    };

};
