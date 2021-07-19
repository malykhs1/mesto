export default class UserInfo {
    constructor(userName, userDescription) {
      this._userName = userName;
      this._userDescription = userDescription;
    }
  
    getUserInfo() {
      return {
        name: this._userName.textContent,
        job: this._userDescription.textContent,
      }
    }
  
    setUserInfo(input) {
      this._userName.textContent = input.surname;
      this._userDescription.textContent = input.job;
    }
  
  }