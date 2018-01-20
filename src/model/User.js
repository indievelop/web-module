import GenericModel from './GenericModel';

class User extends GenericModel {
  private username: string;
  private password: string;

  constructor(options = {}) {
    super(options);

    this.username = options.username || '';
    this.password = options.password || null;
  }

  get usernmae(): string {
    return this.username;
  }
  set username(username: string) {
    this.username = username;
  }
  get password(): string {
    return this.password
  }
  set password(password: stirng) {
    this.password = password;
  }
};

export default User;