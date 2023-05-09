import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Category} from "../models/category";
import {DataService} from "../models/data.service";
import {Transaction} from "../models/transaction";
import {v4 as uuidv4} from "uuid";
import {AuthService} from "../authService/auth.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css'],
  providers: [MessageService]
})
export class CreateTransactionComponent implements OnInit{

  constructor(private data: DataService, private auth: AuthService, private messageService: MessageService) {
  }

  selectedCategory?: any;
  categories: Category[] = [];
  transactions: Transaction[] = [];

  transactionForm = new FormGroup({
    amount: new FormControl(),
    date: new FormControl(),
    status: new FormControl(),
    category: new FormControl()
  });

  preview: any;


  stateOptions: any[] = [
    { label: 'InCome', value: true },
    { label: 'Expense', value: false }
  ];

  checkForm(){
    if(this.transactionForm.value.amount == null) {
      this.messageService.add({severity: 'error', summary: 'Fail', detail: "Amount can't be null"});
      return false;
    }
    if(this.transactionForm.value.date == null) {
      this.messageService.add({severity: 'error', summary: 'Fail', detail: "Date can't be null!"});
      return false;
    }
    if(this.transactionForm.value.status == null) {
      this.messageService.add({severity: 'error', summary: 'Fail', detail: "Status can't be null!"});
      return false;
    }
    if(this.transactionForm.value.category == null) {
      this.messageService.add({severity: 'error', summary: 'Fail', detail: "Category can't be null!"});
      return false;
    }
    return true;
  }

  save() {
    let condition = this.checkForm();
    if(condition) {
      this.transactions.push(new Transaction(
        uuidv4(),
        <number>this.transactionForm.value.amount,
        <boolean>this.transactionForm.value.status,
        <string>this.transactionForm.value.date,
        <string>this.selectedCategory.id,
        <string>this.auth.getLoggedUser(),
      ));
      this.data.sendTransactions(this.transactions);
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'New Transaction Added Successfully !'});
    }
  }

  ngOnInit(): void {
    this.transactions = this.data.transactions;
    this.categories = this.data.categories
  }

}
