import { isNgContainer } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim: string = "your perfct bnking partner"
  data = "enter acno "
  acno = ''
  psw = ''
  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: 123, balance: 0 },
    1001: { acno: 1001, username: "anal", password: 123, balance: 0 },
    1002: { acno: 1002, username: "aeu", password: 123, balance: 0 },
    1003: { acno: 1003, username: "sas", password: 123, balance: 0 },

  }

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) {
   
  }
  loginForm=this.fb.group({acno:[''],psw:['']})
  login() {
    var acno = this.loginForm.value.acno
    var psw = this.loginForm.value.psw
    const result=this.ds.login(acno,psw)
      if (result) {
        alert('login success')
        this.router.navigateByUrl('dashboard')
      }
      else {
        alert('incorect psw or acno')
      }
    }
    
  }

  // 
  // acnochange(event: any) {
  //   this.acno = event.target.value
  // }
  // paswrdchnge(event: any) {
  //   this.psw = event.target.value
  // }

