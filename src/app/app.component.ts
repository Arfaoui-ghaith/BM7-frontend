import {Component, OnInit} from '@angular/core';
import {AuthService} from "./authService/auth.service";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";
import alanBtn from "@alan-ai/alan-sdk-web";
import { AlanButton } from '@alan-ai/alan-sdk-web/dist/AlanButton';
import {DataService} from "./models/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user?: any;
  alanBtnInstance: AlanButton;
  avatar?: string;
  constructor(private auth: AuthService, private router: Router, private data: DataService) {
    this.alanBtnInstance = alanBtn({
      key: 'c63c3fef48863e9ed7b8b753d81411252e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {

        // @ts-ignore
        if (commandData.command === 'navigate') {
          this.navigate(commandData);
        }

      },
    });
  }

  public activate() {
    this.alanBtnInstance.activate();
  }

  public activateAndPlayText() {
    this.alanBtnInstance.activate().then(() => {
      this.alanBtnInstance.playText('Hi');
    });
  }

  public deactivate() {
    this.alanBtnInstance.deactivate();
  }

  items?: MenuItem[];

  toggle: boolean = false;

  navigate(obj: any){
    console.log(obj);
    this.router.navigate([obj.url]);
  }

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
    // @ts-ignore
    this.user = this.data.getUser(this.auth.getLoggedUser());
    this.avatar = `https://ui-avatars.com/api/?name=${this.user.name.replace(" ","+")}&background=0d6efd&color=fff`;
  }

}
