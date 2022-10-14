export default class UserInfo {
  constructor({ nameProfile, aboutProfile }) {
    this._nameProfile = nameProfile;
    this._aboutProfile = aboutProfile;
  }

  getUserInfo() {
    this._formValues = {};
    this._formValues.name = this._nameProfile.textContent;
    this._formValues.info = this._aboutProfile.textContent;
    return this._formValues;
  }

  setUserInfo(newName, newAboutProfile) {
    this._nameProfile.textContent = newName;
    this._aboutProfile.textContent = newAboutProfile;
  }
}
