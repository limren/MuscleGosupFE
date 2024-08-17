import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-authenticated',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './main-authenticated.component.html',
  styleUrl: './main-authenticated.component.css',
})
export class MainAuthenticatedComponent {}
