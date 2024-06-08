import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScanComponent} from "./components/scan/scan.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
