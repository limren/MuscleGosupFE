import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutSession } from '../../models/workout-session.model';
import { WorkoutSessionsService } from '../../services/workout-sessions/workout-sessions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-sessions-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-sessions-board.component.html',
  styleUrl: './workout-sessions-board.component.css',
})
export class WorkoutSessionsBoardComponent {
  workoutSessions$!: Observable<WorkoutSession[]>;

  constructor(private workoutSessionsService: WorkoutSessionsService) {}

  ngOnInit(): void {
    this.workoutSessions$ = this.workoutSessionsService.getSessions();
  }
}
