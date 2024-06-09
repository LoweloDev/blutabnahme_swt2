import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [MatSidenavModule, MatButtonModule, MatToolbar, MatIcon, NgIf, MatNavList, MatListItem, RouterLink, RouterOutlet],
})
export class MenuComponent {
  open = false;

  toggle(open: boolean): void {
    this.open = open;
  }
}
