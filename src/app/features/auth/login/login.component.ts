import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/core/services/login-service.service';
import { Login } from 'src/app/models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //use behavioralSubject?
 

  constructor(private fb: FormBuilder, private login:LoginServiceService , private router: Router) { }
    loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.minLength(4), Validators.required])
    });

  
  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value as Login
      console.log(formValue);
      // const login: Login = {email: formValue.email, password: formValue.password}
      this.login.login(formValue).subscribe({
        next: (val) => {
          if(val){
              this.login.islogin.next(val);
              this.router.navigate(['/dashboard'])
          }else{
            alert("this is not the password/email");
          }
        }
      });
      
    }
  }
}


