import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {Transaction} from "../../models/transaction";

@Component({
  selector: 'app-transactions-by-status-and-categories-chart',
  templateUrl: './transactions-by-status-and-categories-chart.component.html',
  styleUrls: ['./transactions-by-status-and-categories-chart.component.css']
})
export class TransactionsByStatusAndCategoriesChartComponent implements OnInit {

  @Input() categories?: Category[];
  @Input() transactions?: Transaction[];
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

    this.data = {
      labels: this.categories?.map(c=> c.title),
      datasets: [
        {
          label: 'Incomes',
          borderColor: documentStyle.getPropertyValue('--green-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--green-400'),
          pointBorderColor: documentStyle.getPropertyValue('--green-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--green-400'),
          data: this.categories?.map(c => {
            let sum = 0;
            // @ts-ignore
            for(let transaction of this.transactions){
              if(c.id == transaction.category && transaction.status){
                sum+=transaction.amount;
              }
            }
            return sum
          })
        },
        {
          label: 'Expenses',
          borderColor: documentStyle.getPropertyValue('--red-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--red-400'),
          pointBorderColor: documentStyle.getPropertyValue('--red-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--red-400'),
          data: this.categories?.map(c => {
            let sum = 0;
            // @ts-ignore
            for(let transaction of this.transactions){
              if(c.id == transaction.category && !transaction.status){
                sum+=transaction.amount;
              }
            }
            return sum;
          })
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary
          },
          pointLabels: {
            color: textColorSecondary
          }
        }
      }
    };
  }
}
