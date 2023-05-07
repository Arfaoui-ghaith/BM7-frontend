import {Component, OnInit} from '@angular/core';
import {AuthService} from "./authService/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) {
  }
  path : string = this.router.url
  isLoggedIn : boolean = this.auth.isLoggedIn();
  title = 'BM7-frontend';

  logOut(){
    console.log("yeeeeeees",this.path,this.auth.isLoggedIn());
    this.auth.logOut();
    this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      this.router.navigate(['login']);
    });
  }

}
