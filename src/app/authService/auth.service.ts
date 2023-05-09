import { Injectable } from '@angular/core';
import {DataService} from "../models/data.service";
import {Message} from "../models/message";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dataSource?: BehaviorSubject<boolean> ;
  public authenticated?: Observable<boolean> ;

  constructor(private data: DataService) {
    this.dataSource = new BehaviorSubject<boolean>(this.isLoggedIn());
    this.authenticated = this.dataSource.asObservable();
  }

  sendData(data: boolean) {
    this.dataSource?.next(data);
  }

  user: any;

  login(email: string, password: string){
    this.user = this.data.checkCredentials(email,password);
    if(this.user == undefined){
      return new Message("Invalid Credentials !", false);
    }
    localStorage.setItem("BM7-Token",this.user.id);
    return new Message("Welcome !", true);
  }

  getLoggedUser(){
    return localStorage.getItem("BM7-Token");
  }
  isLoggedIn(){
    return !!localStorage.getItem("BM7-Token");
  }

  logOut(){
    localStorage.removeItem("BM7-Token");
  }
}
