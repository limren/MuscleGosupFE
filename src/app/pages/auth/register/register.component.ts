import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgIf, NgClass, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: '../auth.component.css',
})
export class RegisterComponent {
  authService = inject(AuthService);
  hasError = false;
  message = '';
  isToastUp = true;

  registerForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    // #TODO: make password stronger using REGEX
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  onSubmit() {
    const username = this.registerForm.value.username;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    // #TODO : make stronger verification
    if (username == undefined) {
      console.log('error username');
      return;
    } else if (password == undefined) {
      console.log('error password');
      return;
    } else if (email == undefined) {
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
