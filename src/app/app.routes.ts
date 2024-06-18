import { Routes } from '@angular/router';
import { MyBoardComponent } from './my-board/my-board.component';
import { SessionRecorderComponent } from './session-recorder/session-recorder.component';

export const routes: Routes = [
  { path: 'home', component: MyBoardComponent },
  { path: 'sessionRecorder', component: SessionRecorderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home as default
];
