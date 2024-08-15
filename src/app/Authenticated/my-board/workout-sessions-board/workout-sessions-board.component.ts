import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutSession } from '../../../models/workout-session.model';
import { WorkoutSessionsService } from '../../../services/workout-sessions/workout-sessions.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-workout-sessions-board',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './workout-sessions-board.component.html',
  styleUrl: './workout-sessions-board.component.css',
})
export class WorkoutSessionsBoardComponent {
  workoutSessions$: Observable<WorkoutSession[]> =
    this.workoutSessionsService.getSessions();

  displayedColumns: string[] = ['title', 'duration', 'date', 'actions'];

  constructor(private workoutSessionsService: WorkoutSessionsService) {}

  edit(element: any) {
    console.log('element : ', element);
  }
}
