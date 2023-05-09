import {v4 as uuidv4} from "uuid";
export class Category {
  id: string = uuidv4();
  title: string = "";
  image: string = "";
  createdAt: string = "";
  user: string = "";


  constructor(id: string, title: string, image: string, createdAt: string, user: string) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.createdAt = createdAt;
    this.user = user;
  }
}
