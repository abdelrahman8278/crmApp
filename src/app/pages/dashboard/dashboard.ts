import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar-component/sidebar-component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  providers:[],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {

  menu = ['Home', 'Users', 'Reports', 'Settings'];
  stats = [
    { label: 'Users', value: 120 },
    { label: 'Sales', value: '$5,430' },
    { label: 'Tasks', value: 42 }
  ]
  logout() {}
}
