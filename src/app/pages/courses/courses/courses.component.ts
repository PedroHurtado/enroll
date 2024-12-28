import { Component, OnDestroy, signal, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MediaMatcher } from '@angular/cdk/layout';
import { CoursesService } from '../courses.service';
import { Course } from '../course';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnDestroy {
  protected readonly isMobile = signal(false);
  protected readonly categories = signal<string[]>([]);
  protected readonly courses = signal<Course[]>([]);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  private readonly _results:Record<string, Course[]>;

  constructor() {
    const media = inject(MediaMatcher);
    const service = inject(CoursesService);
    this._results = service.getAll()
    const values = ["Todos", ...Object.keys(this._results)];
    this.categories.set(values);
    this.courses.set(Object.values(this._results).flatMap(v => v));
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
  handlerItem(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation
    const node = (ev.composedPath() as HTMLElement[]).find(n => n.dataset && 'key' in n.dataset);
    if (node) {
      const { key } = node.dataset;;
      if (key === 'Todos') {
        this.courses.set(Object.values(this._results).flatMap(v => v));
      } else if (key){
        this.courses.set(this._results[key]);
      }
    }
  }
}
