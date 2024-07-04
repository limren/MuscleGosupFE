import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  authService = inject(AuthService);

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('submitting');

    const username = this.registerForm.value.username;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    // #TODO : make stronger verification
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
    } else if (email == null || email == '') {
      console.log('error email');
      return;
    }
    const response = this.authService.register({
      username: username,
      email: email,
      password: password,
    });
    console.log(
      'response : ',
      response.subscribe((value) => console.log('value : ', value))
    );
  }
}
