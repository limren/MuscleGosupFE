import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

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
  private API_URL = environment.apiURL + '/auth';

  authenticate(loginForm: LoginForm) {
    return this.http
      .post(this.API_URL + '/login', loginForm, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          console.log('Authentication successfully worked: ', response);
        }),
        catchError((error) => {
          console.log('Error while logging in : ', error);
          return of({ error: true, message: 'Authentication failed' });
        })
      );
  }

  register(registerForm: RegisterForm) {
    return this.http.post(this.API_URL + '/register', registerForm);
  }
}
