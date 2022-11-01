import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._inputList = this._popup.querySelectorAll('.form__input');
        this._form = this._popup.querySelector('.form__sending');
        this._buttonSubmit = this._popup.querySelector('.form__submit');
        this._textBtnSubmit = this._buttonSubmit.textContent;
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
            this.renderLoading(true);
            this._submitForm(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

}
