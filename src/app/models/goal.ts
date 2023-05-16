export class Goal {
  id?: string;
  userId?: string;
  title?: string;
  target_amount?: number ;
  deadline?: string;
  createdAt?: string;


  constructor(id: string, userId: string, title: string, target_amount: number, deadline: string, createdAt: string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.target_amount = target_amount;
    this.deadline = deadline;
    this.createdAt = createdAt;
  }
}
