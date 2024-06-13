import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ScanComponent} from "./components/scan/scan.component";
import {MenuComponent} from "./components/menu/menu.component";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {BlutabnahmeComponent} from "./pages/blutabnahme/blutabnahme.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScanComponent, MenuComponent, MatFabButton, MatIcon, MatIconButton, RouterLink, BlutabnahmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
