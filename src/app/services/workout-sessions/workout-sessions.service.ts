import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkoutSession } from '../../models/workout-session.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutSessionsService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.apiURL + '/workoutSession';

  getSessions(): Observable<WorkoutSession[]> {
    return this.http.get<WorkoutSession[]>(this.API_URL + '/get/all', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      // observe: "response" as "response",
    });
  }

  getThisWeekSessions(): Observable<WorkoutSession[]> {
    return this.http.get<WorkoutSession[]>(this.API_URL + '/get/thisWeek', {
      withCredentials: true,
    });
  }

  getThisWeekWorkoutSessionsCount(): Observable<number> {
    return this.http.get<number>(this.API_URL + '/get/thisWeek/count', {
      withCredentials: true,
    });
  }

  getWorkoutSessionsCount(): Observable<number> {
    return this.http.get<number>(this.API_URL + '/get/all/count', {
      withCredentials: true,
    });
  }
}
