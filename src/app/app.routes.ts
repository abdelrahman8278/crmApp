import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { AttendanceComponent } from './pages/attendance-component/attendance-component';
import { CheckOutComponent } from './pages/check-out-component/check-out-component';
import { HomeComponent } from './pages/home-component/home-component';

export const routes: Routes = [
    { path: '', component: DashboardComponent,
        children: [
            { path: 'home', component: HomeComponent},
            { path: 'attendance', component: AttendanceComponent},
            { path: 'checkOut', component: CheckOutComponent},
        ]
    },
    { path: '**', redirectTo: '' }
];
