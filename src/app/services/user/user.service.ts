import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../../models/user.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = environment.apiURL + '/user';

  constructor(private httpClient: HttpClient) {}

  getUserInfo(): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(this.API_URL + '/get/auth', {
      withCredentials: true,
    });
  }
}
