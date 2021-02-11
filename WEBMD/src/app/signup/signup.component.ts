import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passValidator } from './validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide = true;
  form: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.form  = this.fb.group({
      Name: ['', [Validators.required]],
      Lastname: ['', [Validators.required]],
      Email:['',[Validators.required, Validators.email]],
      Password:['',[Validators.required, Validators.minLength(6)]],
      confirmPassword:['', passValidator]
   });
  }

  onSubmit(){
    if (this.form.valid) {
      this.router.navigate(['user-detail-form']);
}else{
  Validators.required;
}
}
}
