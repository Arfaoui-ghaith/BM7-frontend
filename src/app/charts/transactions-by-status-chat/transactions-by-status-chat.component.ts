import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {Transaction} from "../../models/transaction";

@Component({
  selector: 'app-transactions-by-status-chat',
  templateUrl: './transactions-by-status-chat.component.html',
  styleUrls: ['./transactions-by-status-chat.component.css']
})
export class TransactionsByStatusChatComponent implements OnInit {
  @Input() categories?:Category[];
  @Input() transactions?:Transaction[] | undefined;

  data: any;

  options: any;

  onlyUnique(value:any, index:any, array: any) {
    return array.indexOf(value) === index;
  }

  monthNames: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  getMonths(){
    return this.transactions?.map(t => {
      let date: Date = new Date(t.createdAt);
      return date.getMonth();
    }).filter(this.onlyUnique).reverse();
  }



  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: this.getMonths()?.map(m => this.monthNames[m]),
      datasets: [
        {
          type: 'line',
          label: 'Balance',
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: this.getMonths()?.map(i => {
            let incomes = 0;
            let expenses = 0;
            // @ts-ignore
            for(let transaction of this.transactions){
              let date: Date = new Date(transaction.createdAt);
              if(transaction.status && date.getMonth() == i){
                incomes+=transaction.amount;
              }
              if(!transaction.status && date.getMonth() == i){
                expenses+=transaction.amount;
              }
            }
            return incomes - expenses;
          })
        },
        {
          type: 'bar',
          label: 'Incomes',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          data: this.getMonths()?.map(i => {
            let incomes = 0;
            // @ts-ignore
            for(let transaction of this.transactions){
              let date: Date = new Date(transaction.createdAt);
              if(transaction.status && date.getMonth() == i){
                incomes+=transaction.amount;
              }
            }
            return incomes;
          }),
          borderColor: 'white',
          borderWidth: 2
        },
        {
          type: 'bar',
          label: 'Expenses',
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          data: this.getMonths()?.map(i => {
            let expenses = 0;
            // @ts-ignore
            for(let transaction of this.transactions){
              let date: Date = new Date(transaction.createdAt);
              if(!transaction.status && date.getMonth() == i){
                expenses+=transaction.amount;
              }
            }
            return expenses;
          })
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }
}
