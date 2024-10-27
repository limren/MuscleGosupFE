import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeComponent as AuthHomeComponent } from './pages/authenticated/home/home.component';
import { authGuard } from './auth.guard';
import { MyExercisesComponent } from './pages/authenticated/my-exercises/my-exercises.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: AuthHomeComponent, canActivate: [authGuard] },
  { path: 'auth/my-exercises', component: MyExercisesComponent, canActivate: [authGuard]}
];
