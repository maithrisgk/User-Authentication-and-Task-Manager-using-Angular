import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {symbolValidator, passwordMatch} from '../../helper/validation';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    /* this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')

    }); */

    this.buildForm();
  }

  buildForm(){
    this.registerForm=this.builder.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required, symbolValidator])],
      confirmPassword:''
    },{
      validator:passwordMatch
    }
    );
  }

}
