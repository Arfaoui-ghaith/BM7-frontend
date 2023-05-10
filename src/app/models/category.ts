import {v4 as uuidv4} from "uuid";
import {Color} from "./color";
export class Category {
  id: string = uuidv4();
  title: string = "";
  image: string = "";
  createdAt: string = "";
  user: string = "";
  color?: Color;


  constructor(id: string, title: string, image: string, createdAt: string, user: string, color: Color) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.createdAt = createdAt;
    this.user = user;
    this.color = color;
  }
}
