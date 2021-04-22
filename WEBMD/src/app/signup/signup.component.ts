import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passValidator } from './validator';
import { TutorialService } from '../services/tutorial.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide = true;
  form: FormGroup;
  details = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: '',
  };
  
  constructor(private fb: FormBuilder, private router: Router, private service: TutorialService) {
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
      const data = {
        fname: this.details.fname,
        lname: this.details.lname,
        email: this.details.email,
        password: this.details.password,
        cpassword: this.details.cpassword,
      };

      this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
      this.router.navigate(['login']);
}else{
  Validators.required;
}
}
}
