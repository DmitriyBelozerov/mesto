export class FormValidator {
    constructor(config, inputElement) {
        config = config;
        this.inputElement = inputElement;
        this.errorElement = this.inputElement.nextElementSibling;
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
