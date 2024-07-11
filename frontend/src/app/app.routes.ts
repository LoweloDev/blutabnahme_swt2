import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BlutabnahmeComponent} from "./pages/blutabnahme/blutabnahme.component";
import {LaborauftraegeComponent} from "./pages/laborauftraege/laborauftraege.component";
import {BlutabnahmenComponent} from "./pages/blutabnahmen/blutabnahmen.component";

export const routes: Routes = [
  { path: 'dashboard', component: AppComponent },
  { path: 'blutabnahme', component: BlutabnahmeComponent },
  { path: 'laborauftraege', component: LaborauftraegeComponent },
  { path: 'blutabnahmen', component: BlutabnahmenComponent },
  { path: '**', redirectTo: '/dashboard' },
];
