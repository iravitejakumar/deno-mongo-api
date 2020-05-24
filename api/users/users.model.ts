export class User {
  name: string;
  role: string;
  email: string;
  provider: string;
  constructor(user: User) {
    this.name = user.name;
    this.role = user.role;
    this.email = user.email;
    this.provider = user.provider;
  }
}