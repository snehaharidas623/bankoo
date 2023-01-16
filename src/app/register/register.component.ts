import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  constructor(private ds: DataService, private router:Router,private fb:FormBuilder) {}
  registerForm=this.fb.group({uname:[''],acno:[''],psw:['']})
  
  register() {
    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw
    const result = this.ds.register(acno, uname, psw)
    if (result) {
      alert('reg sucess')
      this.router.navigateByUrl('')

    }
    else {
      alert('already exists')
      this.router.navigateByUrl('')

    }

  }
}
