import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateExercise, Exercise } from '../../models/exercise.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  API_URL = environment.apiURL + '/exercise';

  constructor(private http: HttpClient) {}

  createExercise(createExercise: CreateExercise): Observable<Exercise> {
    console.log('Creating...');
    return this.http.post<Exercise>(this.API_URL + '/create', createExercise, {
      withCredentials: true,
    });
  }
}
