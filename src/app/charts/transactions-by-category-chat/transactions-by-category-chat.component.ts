import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {Transaction} from "../../models/transaction";
import {DataService} from "../../models/data.service";

@Component({
  selector: 'app-transactions-by-category-chat',
  templateUrl: './transactions-by-category-chat.component.html',
  styleUrls: ['./transactions-by-category-chat.component.css']
})
export class TransactionsByCategoryChatComponent implements OnInit{
  dataChat: any;

  options: any;

  @Input() categories?: Category[];

  @Input() transactions?: Transaction[];


  constructor(public data: DataService){
  }

  ngOnInit() {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.dataChat = {
      labels: this.categories?.map(c => c.title),
      datasets: [
        {
          label: "Transactions",
          data: this.categories?.map(c => {
              let sum = 0;
              // @ts-ignore
            for(let t of this.transactions){
                if(t.category == c.id){sum+=t.amount}
              }
              return sum;
          }),
          hoverBackgroundColor: this.categories?.map(c => `rgba(${c.color?.r},${c.color?.g},${c.color?.b}, 0.2)`),
          borderColor: this.categories?.map(c => `rgb(${c.color?.r},${c.color?.g},${c.color?.b})`),
          borderWidth: 1
        }
      ]
    };

    console.log(this.dataChat);

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
}
