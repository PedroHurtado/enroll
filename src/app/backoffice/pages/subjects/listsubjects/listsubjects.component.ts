import { Component, OnDestroy, signal, viewChild} from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MediaMatcher } from '@angular/cdk/layout';
import { ActivatedRoute, Router} from '@angular/router';
import { LogoComponent } from '../../../../components/logo/logo.component';
import { LevelService } from '../../levels/level.service';
import { CourseDomain, DescriptorParams, LevelDomain, ModeDomain, SubjectDomain, Utils } from '../../../domain/levels';
import { AlllistComponent } from '../../../../components/alllist/alllist.component';

@Component({
  selector: 'app-listsubjects',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AlllistComponent,
    LogoComponent
  ],
  templateUrl: './listsubjects.component.html',
  styleUrl: './listsubjects.component.css'
})
export class ListsubjectsComponent implements OnDestroy {
  readonly courses = signal<DescriptorParams[]>([]);
  readonly currentCourse = signal<DescriptorParams | undefined>(undefined);
  readonly isMobile = signal(false);

  private readonly sidenav = viewChild<MatSidenav>('snav');
  private readonly mobileQuery: MediaQueryList;
  private readonly mobileQueryListener: () => void;

  constructor(
    private readonly mediaMatcher: MediaMatcher,
    private readonly levelService: LevelService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 720px)');
    this.isMobile.set(this.mobileQuery.matches);

    this.mobileQueryListener = () => {
      this.isMobile.set(this.mobileQuery.matches);
    };
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);

    this.loadData();
  }

  toAddRoute(): void {
    const params = this.currentCourse()?.params || [];
    this.router.navigate(['subjects', ...params, 'add']);
  }
  toEditRoute(subjectDomain:SubjectDomain){
    const params = this.currentCourse()?.params || []
     this.router.navigate(['subjects',...params, subjectDomain.id, 'edit'])
  }
  clickItem(descriptorParams: DescriptorParams): void {
    this.currentCourse.set(descriptorParams);
    if (this.isMobile()) {
      this.sidenav()?.close();
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
  remove(subjectDomain:SubjectDomain){
    const subjects = this.currentCourse()?.subjects || []
    Utils.builder(subjects).remove(subjectDomain)
  }

  private loadData(): void {
    const { levelId, courseId } = this.route.snapshot.params;
    const level = this.loadLevel(levelId);

    if (!level) return;

    const course = this.loadCourse(level, courseId);
    if (!course) return;

    const descriptorParams = this.createDescriptorCourse(level, course);
    this.currentCourse.set(descriptorParams);

    this.courses.set([
      descriptorParams,
      ...course.modalities.map(mode => this.createDescriptorMode(level, course, mode))
    ]);
  }

  private createDescriptorCourse(level: LevelDomain, course: CourseDomain): DescriptorParams {
    return {
      id: course.id,
      name: course.name,
      params: [level.id, course.id],
      subjects:course.subjects
    };
  }

  private createDescriptorMode(level: LevelDomain, course: CourseDomain, mode: ModeDomain): DescriptorParams {
    return {
      id: mode.id,
      name: `${course.name} - (${mode.name})`,
      params: [level.id, course.id, mode.id],
      subjects:mode.subjects
    };
  }

  private loadLevel(id: string): LevelDomain | undefined {
    return this.levelService.get(id);
  }

  private loadCourse(level: LevelDomain, id: string): CourseDomain | undefined {
    return level.courses.find(course => course.id === id);
  }
}
