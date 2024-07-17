import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BlutabnahmeComponent} from "./pages/blutabnahme/blutabnahme.component";
import {LaborauftraegeComponent} from "./pages/laborauftraege/laborauftraege.component";
import {BlutabnahmenComponent} from "./pages/blutabnahmen/blutabnahmen.component";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'dashboard', component: AppComponent },
  { path: 'blutabnahme', component: BlutabnahmeComponent },
  { path: 'laborauftraege', component: LaborauftraegeComponent },
  { path: 'blutabnahmen', component: BlutabnahmenComponent },
  { path: '**', redirectTo: '/login' }, // Redirect unknown routes to login
];
