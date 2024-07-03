import { Routes } from '@angular/router';
import { MyBoardComponent } from './my-board/my-board.component';
import { SessionRecorderComponent } from './session-recorder/session-recorder.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: 'home', component: MyBoardComponent },
  { path: 'sessionRecorder', component: SessionRecorderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: MyBoardComponent }, // Redirect to home as default
];
