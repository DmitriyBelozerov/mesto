import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submitForm}) {
        //Кроме селектора попапа принимает в конструктор колбэк сабмита формы
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

    // Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса
    //       PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit',  (event) => { 
            event.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        });

       
    }

    // Перезаписывает родительский метод close, 
    // так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        super.close();
        this._form.reset();
    }


}

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.