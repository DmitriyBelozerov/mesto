export default class UserInfo {
  constructor(nameProfile, aboutProfile) {
    this._nameProfile = nameProfile;
    this._aboutProfile = aboutProfile;
    // this.User;
    this._avatar = document.querySelector('.profile__avatar');
  }
//создает массив с главной страницы
  getUserInfo() {
    this._formValues = {};
    this._formValues.name = this._nameProfile.textContent;
    this._formValues.info = this._aboutProfile.textContent;
    return this._formValues;
  }
//Вставляет в текстовые поля из массива АПИ

  setUserInfo(newName, newAboutProfile) {
    this._nameProfile.textContent = newName;
    this._aboutProfile.textContent = newAboutProfile;

  }

  submitAvatar(data) {
    this._avatar.style.background = `url(${data.avatar}) no-repeat`;
  }
}
