import {Component, OnInit} from '@angular/core';
import {AuthService} from "../authService/auth.service";
import {DataService} from "../models/data.service";
import {Transaction} from "../models/transaction";
import {Table} from "primeng/table";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit{

  protected readonly Date = Date;

  value: any;

  transactionsDataSource: Transaction[] = [];

  transactions: {
    date: string;
    image: string | undefined;
    amount: number;
    category: string | undefined;
    status: boolean
  }[] = [];

  loading: boolean = true;

  statuses : any = [
    { label: 'InCome', value: true },
    { label: 'Expense', value: false },
  ];

  applyFilterGlobal($event: any) {
    return ($event.target as HTMLInputElement).value;
  }

  getSeverity(status: boolean) {
    switch (status) {
      case false:
        return 'danger';

      case true:
        return 'success';
    }
  }

  clear(table: Table) {
    table.clear();
  }

  constructor(private auth: AuthService, private data: DataService) {
  }

  getCategory(id: string){
    return this.data.getCategory(id);
  }

  visible?: boolean;

  showDialog() {
    this.visible = true;
  }

  ngOnInit(): void {
    this.data.updatedTransactions?.subscribe(v => this.transactionsDataSource=v);
    if(this.auth.isLoggedIn()){
      this.transactions = this.transactionsDataSource
        .filter(t => t.user == this.auth.getLoggedUser())
        .map(t => {
          return {
            category: this.getCategory(t.category)?.title,
            image: this.getCategory(t.category)?.image,
            amount: t.amount,
            date: t.createdAt,
            status: t.status
          }
        });
    }

    console.log(this.transactions,this.transactionsDataSource);
    this.loading = false;
  }

}
