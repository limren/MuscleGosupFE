import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './main/main.component';
import { MyBoardComponent } from './Authenticated/my-board/my-board.component';
import { SessionRecorderComponent } from './Authenticated/session-recorder/session-recorder.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { MainAuthenticatedComponent } from './Authenticated/main-authenticated/main-authenticated.component';

import { HomeComponent as AuthHomeComponent } from './Authenticated/home/home.component';
import { WorkoutSessionComponent } from './Authenticated/workout-session/workout-session.component';
// import { CreateWorkoutSessionComponent } from './Authenticated/create-workout-session/create-workout-session.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'loggedIn',
    component: MainAuthenticatedComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: AuthHomeComponent, pathMatch: 'full' },
      { path: 'board', component: MyBoardComponent },
      { path: 'workoutSession/:id', component: WorkoutSessionComponent },
      // {
      //   path: 'createWorkoutSession',
      //   component: CreateWorkoutSessionComponent,
      // },
    ],
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'board', component: MyBoardComponent },
      { path: 'sessionRecorder', component: SessionRecorderComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];
