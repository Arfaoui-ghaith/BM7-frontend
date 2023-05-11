import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {Transaction} from "../../models/transaction";

@Component({
  selector: 'app-amount-by-status-chart',
  templateUrl: './amount-by-status-chart.component.html',
  styleUrls: ['./amount-by-status-chart.component.css']
})
export class AmountByStatusChartComponent implements OnInit {
  @Input() categories?: Category[];
  @Input() transactions?: Transaction[];
  data: any;

  options: any;

  totalExpenses(){
    let s = 0;
    // @ts-ignore
    for(let transaction of this.transactions){
      if(!transaction.status){
        s+=transaction.amount;
      }
    }
    return s;
  }

  totalIncomes(){
    let s = 0;
    // @ts-ignore
    for(let transaction of this.transactions){
      if(transaction.status){
        s+=transaction.amount;
      }
    }
    return s;
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Incomes', 'Expenses'],
      datasets: [
        {
          data: [this.totalIncomes(),this.totalExpenses()],
          backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };


    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }
}
