import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout1',
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule, RouterOutlet],
  templateUrl: './layout1.component.html',
  styleUrl: './layout1.component.css'
})
export class Layout1Component {
  sidenavOpen = true;

  toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
