import { Component, inject } from '@angular/core';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { WorkoutSession } from '../../../models/workout-session.model';
import { WorkoutSessionsService } from '../../../services/workout-sessions/workout-sessions.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-sessions-board',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, CommonModule],
  templateUrl: './workout-sessions-board.component.html',
  styleUrl: './workout-sessions-board.component.css',
})
export class WorkoutSessionsBoardComponent {
  private router = inject(Router);
  filter = this.formBuilder.nonNullable.group({
    title: [''],
  });

  workoutSessions$: Observable<WorkoutSession[]> = combineLatest([
    this.workoutSessionsService.getSessions(),
    this.filter.controls.title.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([sessions, title]) => {
      return sessions.filter((session) =>
        session.title.toLowerCase().includes(title.toLowerCase())
      );
    })
  );

  navigateToId(workoutSessionId: number) {
    this.router.navigate(['/loggedIn/workoutSession/' + workoutSessionId]);
  }

  constructor(
    private workoutSessionsService: WorkoutSessionsService,
    private formBuilder: FormBuilder
  ) {}
}
