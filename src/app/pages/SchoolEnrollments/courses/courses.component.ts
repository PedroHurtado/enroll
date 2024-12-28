import { Component,  OnDestroy,  signal, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnDestroy {
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
