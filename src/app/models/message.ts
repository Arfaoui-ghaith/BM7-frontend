export class Message {
  msg: string = "";
  success: boolean = true;


  constructor(msg: string, success: boolean) {
    this.msg = msg;
    this.success = success;
  }
}
