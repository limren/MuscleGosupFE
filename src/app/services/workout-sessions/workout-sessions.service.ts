import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WorkoutSessionsService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.apiURL + '/workoutSession';

  getSessions() {
    return this.http.get(this.API_URL + '/get/all');
  }
}
