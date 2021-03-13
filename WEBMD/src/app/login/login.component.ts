import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { TutorialService } from '../services/tutorial.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  details = {
    username: '',
    password: '',
  };
  
  constructor(private fb: FormBuilder, private router: Router, private service: TutorialService) {
    this.form  = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(4)]],
      password: ['', [Validators.required]]
   });
  }

  onSubmit(){
      if (this.form.valid) {
        const logindet = {
          username: this.details.username,
          password: this.details.password,
        };
  
        this.service.find(logindet)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['user-detail-form']);
          },
          error => {
            console.log(error);
          }
        );
  }else{
    Validators.required;
  }
}

  ngOnInit(): void {
    
  }

}
