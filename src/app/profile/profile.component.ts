import {Component, OnInit} from '@angular/core';
import {DataService} from "../models/data.service";
import {User} from "../models/user";
import {AuthService} from "../authService/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit{
  userProfile = new FormGroup({
    id: new FormControl(this.user?.id),
    name: new FormControl(this.user?.name),
    email: new FormControl(this.user?.email),
    password: new FormControl(this.user?.password),
  });

  userPassword = new FormGroup({
    id: new FormControl(this.user?.id),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  userId?: string;
  user?: User;
  constructor(private data: DataService, private auth: AuthService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.userId = this.auth.getLoggedUser();
    // @ts-ignore
    this.user = this.data.getUser(this.userId);

    this.userProfile = new FormGroup({
      id: new FormControl(this.user?.id),
      name: new FormControl(this.user?.name),
      email: new FormControl(this.user?.email),
      password: new FormControl(this.user?.password),
    });

    console.log(this.user);
  }

  savePassword(){
    if(this.userPassword.value.password != null) {
      if (this.userProfile.value.password != this.userPassword.value.password) {
        this.messageService.add({severity: 'error', summary: 'Fail', detail: 'Wrong current password !'});
      } else if (this.userPassword.value.password != this.userPassword.value.confirmPassword) {
        this.messageService.add({severity: 'error', summary: 'Fail', detail: 'Confirm your password !'});
      } else {
        this.data.updateUserPassword(
          this.userPassword.value.id,
          this.userPassword.value.password
        )
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Password has been updated successfully!'
        });
      }
    }else{
      this.messageService.add({severity: 'error', summary: 'Fail', detail: 'Fill the password field !'});
    }
  }

  save() {
    this.data.updateUser(this.userProfile.value.id, this.userProfile.value.name, this.userProfile.value.email);
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Profile has been updated successfully!'});
  }
}
