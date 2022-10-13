export default class UserInfo {
  //принимает объект с селекторами
  constructor({ nameProfile, aboutProfile }) {
    this._nameProfile = nameProfile;
    this._aboutProfile = aboutProfile;
  }

  getUserInfo() {
    this._formValues = {};
    this._formValues.name = this._nameProfile.textContent;
    this._formValues.info = this._aboutProfile.textContent;
    // console.log(this._formValues);
    return this._formValues;
  }

  setUserInfo(nameProfile, aboutProfile) {
    this._nameProfile.textContent = nameProfile;
    this._aboutProfile.textContent = aboutProfile;
  }
}
