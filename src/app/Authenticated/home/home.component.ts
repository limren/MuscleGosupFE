import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkoutSessionsService } from '../../services/workout-sessions/workout-sessions.service';
import { WorkoutSession } from '../../models/workout-session.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  weekWorkoutSessions$: Observable<WorkoutSession[]> =
    this.workoutSessionsService.getThisWeekSessions();

  constructor(private workoutSessionsService: WorkoutSessionsService) {}
}
