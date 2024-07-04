import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(
      `Trying to log in with : ${this.loginForm.value.username} ${this.loginForm.value.password}`
    );
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    if (
      username == null ||
      username == '' ||
      username == undefined ||
      username.length < 4
    ) {
      console.log('error username');
      return;
    } else if (password == null || password == '' || password.length < 8) {
      console.log('error password');
      return;
    }
    const response = this.authService.authenticate({
      username: username,
      password: password,
    });
    console.log('response : ', response);
  }
}
