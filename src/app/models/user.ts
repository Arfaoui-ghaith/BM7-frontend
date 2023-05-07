import { v4 as uuidv4 } from 'uuid';
export class User {
  id: string = uuidv4();
  name: string = "";
  email: string = "";
  password: string = "";
  createdAt: string = Date.now().toString();


  constructor(id: string, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
