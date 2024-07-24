import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BlutabnahmeComponent} from "./pages/blutabnahme/blutabnahme.component";
import {LaborauftraegeComponent} from "./pages/laborauftraege/laborauftraege.component";
import {BlutabnahmenComponent} from "./pages/blutabnahmen/blutabnahmen.component";
import {LoginComponent} from "./components/login/login.component";
import {GenericDetailComponent} from "./components/generic-detail/generic-detail.component";
import {ProbenComponent} from "./pages/proben/proben.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'dashboard', component: AppComponent },
  { path: 'blutabnahme', component: BlutabnahmeComponent },
  { path: 'laborauftraege', component: LaborauftraegeComponent },
  { path: 'blutabnahmen', component: BlutabnahmenComponent },
  { path: 'proben', component: ProbenComponent },
  { path: 'detail/:type/:id', component: GenericDetailComponent },
  { path: '**', redirectTo: '/login' }, // Redirect unknown routes to login
];
