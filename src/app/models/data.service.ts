import { Injectable } from '@angular/core';
import {User} from "./user";
import {Category} from "./category";
import {Transaction} from "./transaction";
import {BehaviorSubject, Observable} from "rxjs";
import {Color} from "./color";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private transactionsDataSource?: BehaviorSubject<Transaction[]> ;
  public updatedTransactions?: Observable<Transaction[]> ;

  private categoriesDataSource?: BehaviorSubject<Category[]> ;
  public updatedCategories?: Observable<Category[]> ;

  private selectedCategoryDataSource?: BehaviorSubject<any> ;
  public updatedSelectedCategory?: Observable<any> ;

  private usersDataSource?: BehaviorSubject<User[]> ;
  public updatedUsers?: Observable<User[]> ;

  constructor() {
    this.transactionsDataSource = new BehaviorSubject<Transaction[]>(this.transactions);
    this.updatedTransactions = this.transactionsDataSource.asObservable();
    this.categoriesDataSource = new BehaviorSubject<Category[]>(this.categories);
    this.updatedCategories = this.categoriesDataSource.asObservable();
    this.selectedCategoryDataSource = new BehaviorSubject<any>(this.selectedCategory);
    this.updatedSelectedCategory = this.selectedCategoryDataSource.asObservable();
    this.usersDataSource = new BehaviorSubject<User[]>(this.users);
    this.updatedUsers = this.usersDataSource.asObservable();
  }

  sendTransactions(data: Transaction[]) {
    this.transactionsDataSource?.next(data);
  }

  sendCategories(data: Category[]) {
    this.categoriesDataSource?.next(data);
  }

  sendUsers(data: User[]) {
    this.usersDataSource?.next(data);
  }

  sendSelectedCategory(data: any) {
    this.selectedCategoryDataSource?.next(data);
  }

  selectedCategory: any;

  images : any;

  users : User[] = [
    new User("df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f","Ghaith Arfaoui","ghaith.arfaoui34@gmail.com", "admin123")
  ];

  categories : Category[] = [
    new Category("40d2d8db-5831-4332-92bd-a2a510ac5e4f", "Salary", "https://cdn-icons-png.flaticon.com/24/3135/3135706.png", "05/07/2023","df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f", new Color(4,144,214)),
    new Category("f9baae26-3e49-4f80-aea8-a9de2b5bb6c6", "Rent", "https://cdn-icons-png.flaticon.com/24/602/602220.png","05/07/2023", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f", new Color(232,74,74)),
    new Category("25972114-f283-4e55-bac3-46c0d8548e35", "Grocery", "https://cdn-icons-png.flaticon.com/24/2203/2203183.png","05/07/2023", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f", new Color(247,213,62)),
    new Category("d93811ae-5722-4d3d-aebc-25a6bf6f3896", "Freelance", "https://cdn-icons-png.flaticon.com/24/2108/2108625.png","05/07/2023", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f", new Color(127,255,0)),

  ];

  transactions : Transaction[] = [
    new Transaction("96f3c188-536b-46f7-82e6-9f9554197a55", 3200, true, "04/25/2023", "40d2d8db-5831-4332-92bd-a2a510ac5e4f", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f"),
    new Transaction("3d75d01e-8aa5-4e63-a1d6-78ca4c4406ec", 500, false, "04/29/2023","25972114-f283-4e55-bac3-46c0d8548e35", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f"),
    new Transaction("58622758-4f92-48f9-acba-a481b6202c76", 150, false, "05/02/2023","25972114-f283-4e55-bac3-46c0d8548e35", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f"),
    new Transaction("05b9a918-cdf1-4daa-8d4e-133b4256f486", 820, false, "05/08/2023","f9baae26-3e49-4f80-aea8-a9de2b5bb6c6", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f"),
    new Transaction("d2a45944-60b6-4c86-888e-58d73d3b9e1a", 1900, true, "05/10/2023","d93811ae-5722-4d3d-aebc-25a6bf6f3896", "df389fe4-05d3-4d0e-a3f4-a5b9e4088a6f")
  ];

  checkUserByEmail(email: string){
    return this.users.some(u => u.email == email);
  }

  checkCredentials(email: string, password: string){
    return this.users.find(u => u.email == email && u.password == password);
  }

  getCategory(id: string){
    return this.categories.find(c=>c.id == id);
  }

  getUser(id: string){
    return this.users.find(c=>c.id == id);
  }
  getCategoriesByUser(user: string) {
    return this.categories.filter(t => t.user == user);
  }

  updateUser(id: any, name: any, email: any){
    let user = this.users.find(u => u.id == id);
    if (user instanceof User) {
      let i = this.users.indexOf(user);
      user.name = name;
      user.email = email;
      this.users[i] = user;
    }
  }

  updateUserPassword(id: any, password: any){
    let user = this.users.find(u => u.id == id);
    if (user instanceof User) {
      let i = this.users.indexOf(user);
      user.password = password;
      this.users[i] = user;
    }
  }

  addTransaction(transaction: Transaction){
    this.transactions.push(transaction);
  }

  getTransactionsByUser(user: string) {
    return this.transactions.filter(t => t.user == user);
  }
}
