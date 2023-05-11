import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit{

  files: [{
    data: {
      current: number;
      goal: number;
      start: string;
      progress: number;
      end: string;
      title: string;
      status: boolean
    };
    children: { transaction: { date: string; amount: number; name: string; id: number } }[]
  }] = [
    {
      data: {
        title: 'Item ',
        start: '',
        end: 'Type ',
        current: 5454,
        goal: 65445,
        progress: 5454,
        status: false
      },
      children: [
        {
          transaction: {
            id: 1,
            name: 'Item ',
            amount: 15,
            date: 'Type'
          }
        }
      ]
    }
  ];

  cols: any[] = [
    { field: 'name', header: 'Title' },
    { field: 'start', header: 'Start' },
    { field: 'end', header: 'End' },
    { field: 'current', header: 'Current' },
    { field: 'goal', header: 'Goal' },
    { field: 'progress', header: 'Progress' },
    { field: 'status', header: 'Status' }
  ];

  ngOnInit() {
    // @ts-ignore
    this.files = [];
    for (let i = 0; i < 50; i++) {
      let node = {
        data: {
          name: 'Item ' + i,
          size: Math.floor(Math.random() * 1000) + 1 + 'kb',
          type: 'Type ' + i
        },
        children: [
          {
            data: {
              name: 'Item ' + i + ' - 0',
              size: Math.floor(Math.random() * 1000) + 1 + 'kb',
              type: 'Type ' + i
            }
          }
        ]
      };

      // @ts-ignore
      this.files.push(node);
    }

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];
  }
}
