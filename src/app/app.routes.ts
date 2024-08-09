import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './main/main.component';
import { MyBoardComponent } from './my-board/my-board.component';
import { SessionRecorderComponent } from './session-recorder/session-recorder.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: MyBoardComponent, pathMatch: 'full' },
      { path: 'home', component: MyBoardComponent },
      { path: 'sessionRecorder', component: SessionRecorderComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];
