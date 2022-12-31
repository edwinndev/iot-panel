import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@data/services/auth.service';

@Component({
  selector: 'mmj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loading : boolean = false;
  public form : FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(10)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private fb : FormBuilder,
    private authService : AuthService,
    private router : Router
  ) { }

  public login () {
    this.loading = true;
    const {username, password} = this.form.value
    this.authService.login(username, password).subscribe({
      next: (response) => {
        if (response.ok) {
          this.loading = false
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['/admin']);
        }
      },
      error: (e) => this.loading = false,
    })
  }

}
