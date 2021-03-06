import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndService: BackEndService) { }

  ngOnInit(): void {
  this.OnFetch();
  }

  onSave(){
    console.log("Clicked Save");
    this.backEndService.saveData();
  }

  OnFetch(){
    console.log("Inside Fetch");
    this.backEndService.fetchdata();
  }
  onLogin(){
    console.log("login clicked");
    this.backEndService.loginUser();
  }
  onSignup(){
    console.log("sign up clicked");
    this.backEndService.createUser();
  }

}