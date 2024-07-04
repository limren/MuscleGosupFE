import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type LoginForm = {
  username: string;
  password: string;
};

type RegisterForm = {
  username: string;
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // #TODO : change it to be imported from .env or .env.production
  private API_URL = 'http://localhost:8080/api/auth';

  authenticate(loginForm: LoginForm) {
    // try {
    return this.http.post(this.API_URL + '/login', loginForm);

    // } catch (err) {
    //   return {
    //     message: 'Authentication failed' + err,
    //     content: [],
    //     isLogged: false,
    //   };
    // }
  }

  register(registerForm: RegisterForm) {
    // try {
    return this.http.post(this.API_URL + '/register', registerForm);

    // } catch (err) {
    //   return {
    //     message: 'Registration failed ' + err,
    //     content: [],
    //   };
    // }
  }
}
