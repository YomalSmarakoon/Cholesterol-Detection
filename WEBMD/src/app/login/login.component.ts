import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.form  = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(4)]],
      password: ['', [Validators.required]]
   });
  }

  onSubmit(){
      if (this.form.valid) {
        this.router.navigate(['user-detail-form']);
  }else{
    Validators.required;
  }
}

  ngOnInit(): void {
    
  }

}
