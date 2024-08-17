import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
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

interface LoginResponse {
  error?: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // #TODO : change it to be imported from .env or .env.production
  private API_URL = environment.apiURL + '/auth';

  authenticate(loginForm: LoginForm): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.API_URL + '/login', loginForm, {
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

  isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>(this.API_URL + '/isLoggedIn', {
      withCredentials: true,
    });
  }
}
