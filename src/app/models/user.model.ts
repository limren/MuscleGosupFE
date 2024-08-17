import { WorkoutSession } from './workout-session.model';

export interface User {
  id: Number;
  username: String;
  email: String;
}

export interface UserInfo {
  username: String;
  email: String;
  workoutSessions: WorkoutSession[];
}
