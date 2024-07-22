import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ScanComponent} from "./components/scan/scan.component";
import {MenuComponent} from "./components/menu/menu.component";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {BlutabnahmeComponent} from "./pages/blutabnahme/blutabnahme.component";
import {BreakpointObserver} from "@angular/cdk/layout";
import {AuthService} from "../services/auth-service";
import {MatDialog} from "@angular/material/dialog";
import {MqttService} from "../services/mqtt.service";
import {GenericDetailComponent} from "./components/generic-detail/generic-detail.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScanComponent, MenuComponent, MatFabButton, MatIcon, MatIconButton, RouterLink, BlutabnahmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  constructor(
    private mqtt: MqttService,
    private snackBar: MatSnackBar,
  ) {}

  async ngOnInit() {
    await this.mqtt.subscribe("blutabnahme");

    this.mqtt.getClient().handleMessage = (packet) => {
      console.log("Received message:", packet.payload.toString());

      this.snackBar.open("Jemand hat eine Blutabnahme erstellt", 'Close', {
        duration: 3000,
      });
    };
  }

  ngOnDestroy() {
    this.mqtt.close();
  }
}
