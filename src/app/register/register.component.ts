import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MessageService} from "primeng/api";
import {DataService} from "../models/data.service";
import {v4 as uuidv4} from "uuid";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit{


  constructor(private data: DataService, private messageService: MessageService, private router: Router) {
  }

  users: User[] = [];
  ngOnInit(): void {
        this.data.updatedUsers?.subscribe(v => this.users = v);
    }

  userForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  checkForm(){
    if(this.userForm.value.name == null) {
      this.messageService.add({severity: 'error', summary: 'Fail', detail: "Name can't be null"});
      return false;
    }
    if(this.userForm.value.email == null) {
      this.messageService.add({severity: 'error', summary: 'Fail', detail: "Email can't be null!"});
      return false;
    }
    if(this.userForm.value.password == null) {
      this.messageService.add({severity: 'error', summary: 'Fail', detail: "Password can't be null!"});
      return false;
    }else{

      if(this.userForm.value.password != this.userForm.value.confirmPassword) {
        this.messageService.add({severity: 'error', summary: 'Fail', detail: "Password not match!"});
        return false;
      }

    }
    return true;
  }

  save() {
    let condition = this.checkForm();
    if(condition) {
      this.users?.push(new User(
        uuidv4(),
        <string>this.userForm.value.name,
        <string>this.userForm.value.email,
        <string>this.userForm.value.password
      ));
      this.data.sendUsers(this.users);
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'You Registered Successfully !'});
      this.router.navigate(["login"]);
    }
  }

}
