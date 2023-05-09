import {Component, OnInit} from '@angular/core';
import {AuthService} from "./authService/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService, private router: Router) {
  }

  toggle: boolean = false;

  toggleChange(){
    this.toggle = !this.toggle;
  }

  path : string = this.router.url
  isLoggedIn : boolean = this.auth.isLoggedIn();
  title = 'BM7-frontend';

  logOut(){
    this.auth.sendData(false)
    this.auth.logOut();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.auth.authenticated?.subscribe(v => this.isLoggedIn=v);
  }

}
