import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './main/main.component';
import { MyBoardComponent } from './Authenticated/my-board/my-board.component';
import { SessionRecorderComponent } from './Authenticated/session-recorder/session-recorder.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Authenticated/home/home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'loggedIn',
    component: MainComponent,
    canActivate: [authGuard],
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
