import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkoutSessionsService } from '../services/workout-sessions/workout-sessions.service';
import { WorkoutSession } from '../models/workout-session.model';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user.model';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
