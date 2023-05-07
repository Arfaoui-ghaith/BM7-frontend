import { v4 as uuidv4 } from 'uuid';
import {Category} from "./category";
export class Transaction {
  id: string = uuidv4();
  amount: number = 0.0;
  status: boolean = true;
  createdAt: string = Date.now().toString();
  category: string = "";
  user: string = "";


  constructor(id: string, amount: number, status: boolean, category: string, user: string) {
    this.id = id;
    this.amount = amount;
    this.status = status;
    this.category = category;
    this.user = user;
  }
}
