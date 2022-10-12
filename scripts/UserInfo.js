export default class UserInfo {
  constructor({ nameProfile, aboutProfile }) {
    this._userName = nameProfile;
    this._userInfo = aboutProfile;

  }

  getUserInfo() {
    this._formValues = {};
    this._formValues.name = this._userName.textContent;
    this._formValues.info = this._userInfo.textContent;
    console.log(this._formValues);
    return this._formValues;
  }

  setUserInfo() {
    this._nameProfile.textContent = this._userName;
    this._aboutProfile.textContent = this._userInfo;
  }
} 


// export default class UserInfo {
//   constructor ({name, info}) {
//     this._name = name;
//     this._info = info;
//   }

//   getUserInfo() {
//     return {name: this._name.textContent, info: this._info.textContent};
//   }

//   setUserInfo(name, info) {
//     this._name.textContent = name;
//     this._info.textContent = info;
//   }
// }