import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDrawer, MatDrawerMode, MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {MatListItem, MatNavList} from "@angular/material/list";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {AuthService} from "../../../services/auth-service";
import {MqttService} from "../../../services/mqtt.service";
import {MatDialog} from "@angular/material/dialog";
import {MqttEvent} from "../../../models/mqtt-event";
import {GenericDetailComponent} from "../generic-detail/generic-detail.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [MatSidenavModule, MatButtonModule, MatToolbar, MatIcon, NgIf, MatNavList, MatListItem, RouterLink, RouterOutlet],
})
export class MenuComponent implements AfterViewInit {
  isDesktop: boolean = false;
  drawerMode: MatDrawerMode = 'over';
  @ViewChild('drawer') drawer: MatDrawer;
  constructor(private breakpointObserver: BreakpointObserver, protected authService: AuthService, private readonly dialog: MatDialog, private readonly mqtt: MqttService, private readonly router: Router) {
  }

  // async ngOnInit() {
  //   await this.mqtt.subscribe("blutabnahme");
  //
  //   this.mqtt.getClient().handleMessage = (packet) => {
  //     console.log("Received message:", packet.payload.toString())
  //     this.dialog.open(GenericDetailComponent, {
  //       data: packet.payload,
  //     });
  //
  //     this.router.navigate(['/blutabnahmen']);
  //   };
  // }
  //
  // ngOnDestroy() {
  //   this.mqtt.close();
  // }

  ngAfterViewInit() {
    this.handleBreakpoints();
  }

  handleBreakpoints() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isDesktop = !result.matches;
      this.drawerMode = this.isDesktop ? 'side' : 'over';
    });

    if (this.isDesktop) {
      // this.drawer.toggle();
    }
  }
}
