import { Injectable } from '@angular/core';
import {User} from "./user";
import {Category} from "./category";
import {Transaction} from "./transaction";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users : User[] = [
    new User("df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f","Ghaith Arfaoui","ghaith.arfaoui34@gmail.com", "admin123")
  ];

  categories : Category[] = [
    new Category("40d2d8db-5831-4332-92bd-a2a510ac5e4f", "Salary", "https://cdn-icons-png.flaticon.com/24/3135/3135706.png", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f"),
    new Category("f9baae26-3e49-4f80-aea8-a9de2b5bb6c6", "Rent", "https://cdn-icons-png.flaticon.com/24/602/602220.png", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f"),
    new Category("25972114-f283-4e55-bac3-46c0d8548e35", "Grocery", "https://cdn-icons-png.flaticon.com/24/2203/2203183.png", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f")
  ];

  transactions : Transaction[] = [
    new Transaction("96f3c188-536b-46f7-82e6-9f9554197a55", 3200, true, "40d2d8db-5831-4332-92bd-a2a510ac5e4f", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f"),
    new Transaction("3d75d01e-8aa5-4e63-a1d6-78ca4c4406ec", 500, false, "25972114-f283-4e55-bac3-46c0d8548e35", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f"),
    new Transaction("58622758-4f92-48f9-acba-a481b6202c76", 15, false, "25972114-f283-4e55-bac3-46c0d8548e35", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f"),
    new Transaction("05b9a918-cdf1-4daa-8d4e-133b4256f486", 820, false, "f9baae26-3e49-4f80-aea8-a9de2b5bb6c6", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f")
  ];

  checkUserByEmail(email: string){
    return this.users.some(u => u.email == email);
  }

  checkCredentials(email: string, password: string){
    return this.users.find(u => u.email == email && u.password == password);
  }

  getCategoriesByUser(user: string) {
    return this.categories.filter(t => t.user == user);
  }

  getTransactionsByUser(user: string) {
    return this.transactions.filter(t => t.user == user);
  }
  constructor() { }
}
