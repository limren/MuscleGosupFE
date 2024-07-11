import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);

  loginForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  onSubmit() {
    console.log(
      `Trying to log in with : ${this.loginForm.value.username} ${this.loginForm.value.password}`
    );
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    if (!username) {
      console.log('error username');
      return;
    } else if (!password) {
      console.log('error password');
      return;
    }
    const response = this.authService.authenticate({
      username: username,
      password: password,
    });

    response.subscribe(() => console.log('ok'));
  }
}
