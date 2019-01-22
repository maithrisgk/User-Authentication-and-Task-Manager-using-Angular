import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  // taskTitle : string='';

  model: any={};
  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('user');
  }

  login(){
    if(this.model.username==='admin' && this.model.password ==='admin'){
      localStorage.setItem('user',this.model.username);
      this.router.navigate(['/tasks']);
    }
    else{
      
    }
  }
}
