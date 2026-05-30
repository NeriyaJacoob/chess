import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private fb: FormBuilder) { }
    loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.minLength(4), Validators.required])
    });

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}


