import { Component, NgModule, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// http://192.168.101.11:8080/login
export class LoginComponent implements OnInit {

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value.username );
  }
  constructor() { }

  ngOnInit(): void {
  }

  
}
