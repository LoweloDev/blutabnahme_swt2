import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDrawer, MatDrawerMode, MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [MatSidenavModule, MatButtonModule, MatToolbar, MatIcon, NgIf, MatNavList, MatListItem, RouterLink, RouterOutlet],
})
export class MenuComponent implements OnInit, AfterViewInit {
  isDesktop: boolean = false;
  drawerMode: MatDrawerMode = 'over';
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(private breakpointObserver: BreakpointObserver) {}
ngOnInit() {
}

  ngAfterViewInit() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isDesktop = !result.matches;
      this.drawerMode = this.isDesktop ? 'side' : 'over';
    });

    if (this.isDesktop) {
      // this.drawer.toggle();
    }
  }
}
