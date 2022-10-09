// отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  constructor({ userName, UserInfo }) {

  }

  //  возвращает объект с данными пользователя
  // Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
  getUserInfo() {
    this._inputList = this._element.querySelectorAll('.form__input');
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    // возвращаем объект значений
    return this._formValues;
  }

  //   принимает новые данные пользователя и добавляет их на страницу
  setUserInfo() {

  }
} 