import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passValidator } from './validator';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide = true;
  form: FormGroup;
  tutorial = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: '',
  };
  userid = null;
  submitted = false;
  
  constructor(private fb: FormBuilder, private router: Router, private tutorialService: TutorialService) {
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
        fname: this.tutorial.fname,
        lname: this.tutorial.lname,
        email: this.tutorial.email,
        password: this.tutorial.password,
        cpassword: this.tutorial.cpassword,
      };

      this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
      this.router.navigate(['user-detail-form']);
}else{
  Validators.required;
}
}
}
