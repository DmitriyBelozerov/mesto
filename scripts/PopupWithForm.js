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
        this._buttonClose.addEventListener('click', this.close.bind(this));
        console.log(this._formValues);
        this._form.addEventListener('submit',  (event) => { 
            event.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        });

        document.addEventListener("mousedown", (event) => {
            const popup = event.target.classList.contains('popup');
            if (popup) {
                this.close();
            }
        });
    }

    // Перезаписывает родительский метод close, 
    // так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener('keydown', (evt) => { this._handleEscClose(evt) });
        this._form.reset();
    }


}

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.