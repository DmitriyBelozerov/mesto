import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._inputList = this._popupSelector.querySelectorAll('.form__input');
        this._buttonSubmit = this._popupSelector.querySelector('.form__submit');
        this._form = this._popupSelector.querySelector('.form__sending');
        this._formValues = {};
    }

    _getInputValues() {
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit',  (event) => { 
            event.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}
