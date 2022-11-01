export default class UserInfo {
  constructor(nameProfile, aboutProfile, avatarSelector) {
    this._nameProfile = nameProfile;
    this._aboutProfile = aboutProfile;
    this._avatar = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    this._profileData = {};
    this._profileData.name = this._nameProfile.textContent;
    this._profileData.info = this._aboutProfile.textContent;
    return this._profileData;
  }

  setUserInfo(newName, newAboutProfile) {
    this._nameProfile.textContent = newName;
    this._aboutProfile.textContent = newAboutProfile;

  }

  submitAvatar(data) {
    this._avatar.style.content = `url(${data.avatar})`;
  }
}
