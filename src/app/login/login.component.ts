import { Component } from '@angular/core';
import {AuthService} from "../authService/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";
  msg: any;

  constructor(private auth: AuthService, private toastr: ToastrService, private router: Router) {
  }

  submit(){
    this.msg = this.auth.login(this.email, this.password);
    console.log(this.msg,this.email, this.password);
    if(this.msg.success){
      this.toastr.success(this.msg.msg, 'Success!');
      this.router.navigate(["/"]);
    }else {
      this.toastr.error(this.msg.msg, 'Fail!');
    }
  }


}
