import {v4 as uuidv4} from "uuid";
export class Category {
  id: string = uuidv4();
  title: string = "";
  image: string = "";
  createdAt: string = Date.now().toString();
  user: string = "";


  constructor(id: string, title: string, image: string, user: string) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.user = user;
  }
}
