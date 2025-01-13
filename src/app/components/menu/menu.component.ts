import { MediaMatcher } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-menu',
  imports: [RouterLink,MatButtonModule, MatIconModule,MatMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  protected readonly isMobile = signal(false);
    private readonly _mobileQuery: MediaQueryList;
    private readonly _mobileQueryListener: () => void;
    constructor() {
        const media = inject(MediaMatcher);
        this._mobileQuery = media.matchMedia('(max-width: 720px)');
        this.isMobile.set(this._mobileQuery.matches);
        this._mobileQueryListener = () => {
          this.isMobile.set(this._mobileQuery.matches);

        };
        this._mobileQuery.addEventListener('change', this._mobileQueryListener);
      }
      ngOnDestroy(): void {
        this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
      }
}
