import {Component, OnInit} from '@angular/core';
import {Goal} from "../../models/goal";
import {DataService} from "../../models/data.service";
import {Table} from "primeng/table";
import {AuthService} from "../../authService/auth.service";

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit{

  constructor(private data: DataService, private auth: AuthService) {
  }

  protected readonly Date = Date;

  value: any;

  loading: boolean = true;

  clear(table: Table) {
    table.clear();
  }

  visible?: boolean;


  goals: Goal[] = [];

  gls: {
    current_amount: number;
    target_amount: number | undefined;
    id: string | undefined;
    title: string | undefined;
    deadline: string | undefined;
    start_date: string | undefined;
  }[] = [];

  balance: number=0;
  previous_goal: number | undefined=0;


  ngOnInit() {
    this.data.updatedGoals?.subscribe(g => this.goals = g);
    // @ts-ignore
    this.balance = this.data.getBalance(this.auth.getLoggedUser())
    this.gls = this.goals.map(g => {
      // @ts-ignore
      this.balance = this.balance-this.previous_goal;
      this.previous_goal = g.target_amount;
      return {
        id: g.id,
        title: g.title,
        start_date: g.createdAt,
        deadline: g.deadline,
        target_amount: g.target_amount,
        current_amount: this.balance
      }
    })
    console.log(this.goals);
    this.loading = false;
  }
}
