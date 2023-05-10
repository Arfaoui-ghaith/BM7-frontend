import {Component, OnInit} from '@angular/core';
import {DataService} from "../models/data.service";
import {Transaction} from "../models/transaction";
import {Category} from "../models/category";
import {TimeagoIntl} from "ngx-timeago";
import {strings as englishStrings} from 'ngx-timeago/language-strings/en';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  transactions: Transaction[] = [];

  categories: Category[] = [];

  balance: number = 0;

  incomes: number =0;

  expenses: number = 0;

  recentTransactions?: Transaction[];

  constructor(private data: DataService, private intl: TimeagoIntl) {
    intl.strings = englishStrings;
    intl.changes.next();
  }

  getCategoryName(t: Transaction){
    return this.data.getCategory(t.category)?.title
  }

  dateConverter(d: string){
    let date: Date = new Date(d);
    return date.getTime()
  }

  ngOnInit(): void {
    this.data.updatedTransactions?.subscribe(t => this.transactions = t);
    this.data.updatedCategories?.subscribe(c => this.categories = c);
    // @ts-ignore
    for(let t of this.transactions){
      t.status ? this.incomes+=t.amount : this.expenses+=t.amount;
    }
    this.balance = this.incomes - this.expenses;

    this.recentTransactions = this.transactions?.sort(function(a,b){
      let date1: Date = new Date(a.createdAt);
      let date2: Date = new Date(b.createdAt);
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return date2.getTime() -date1.getTime();
    });
  }

}
