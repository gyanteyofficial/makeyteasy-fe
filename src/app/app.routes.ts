import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { GearComponent } from './pages/gear/gear.component';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'gear', component: GearComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '**', redirectTo: '' }
];
