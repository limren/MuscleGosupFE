import { Component } from '@angular/core';
import { WorkoutSessionsService } from '../../services/workout-sessions/workout-sessions.service';
import { Observable } from 'rxjs';
import { WorkoutSession } from '../../models/workout-session.model';
import { UserInfo } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  getWorkoutSessionsCount$: Observable<WorkoutSession[]> =
    this.workoutSessionsService.getThisWeekSessions();
  userInfo$: Observable<UserInfo> = this.userService.getUserInfo();

  constructor(
    private workoutSessionsService: WorkoutSessionsService,
    private userService: UserService
  ) {}
}
