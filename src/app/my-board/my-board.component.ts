import { Component } from '@angular/core';
import { WorkoutSessionsBoardComponent } from './workout-sessions-board/workout-sessions-board.component';

@Component({
  selector: 'app-my-board',
  standalone: true,
  imports: [WorkoutSessionsBoardComponent],
  templateUrl: './my-board.component.html',
  styleUrl: './my-board.component.css',
})
export class MyBoardComponent {}
