import GenericModel from './GenericModel';

class User extends GenericModel {
  private _username: string | null;
  private _password: string | null;

  constructor() {
    super();

    this._username = null;
    this._password = null;
  }

  get usernmae(): string | null {
    return this._username;
  }
  set username(_username: string | null) {
    this.username = _username;
  }
  get password(): string | null {
    return this._password;
  }
  set password(_password: string | null) {
    this._password = _password;
  }
};

export default User;