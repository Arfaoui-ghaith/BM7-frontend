import { v4 as uuidv4 } from 'uuid';
import {Category} from "./category";
export class Transaction {
  id: string = uuidv4();
  amount: number = 0.0;
  status: boolean = true;
  createdAt: string = "08/05/2023";
  category: string = "";
  user: string = "";




  constructor(id: string, amount: number, status: boolean, createdAt: string, category: string, user: string) {
    this.id = id;
    this.amount = amount;
    this.status = status;
    this.createdAt = createdAt;
    this.category = category;
    this.user = user;
  }
}
