import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { ContainerComponent } from '../../../../components/container/container.component';
import { SubjectconfigComponent } from '../subjectconfig/subjectconfig.component';
import { SubjectsComponent } from '../subjects/subjects.component';

import { ActivatedRoute } from '@angular/router';
import defaultSubjectDomain, { IActionSubject, ISubjectDomain, LevelDomain, SubjectDomain, ModeDomain, CourseDomain } from '../../../domain/levels';
import { LevelService } from '../../levels/level.service';

@Component({
  selector: 'app-addsubjects',
  imports: [
    HeaderComponent,
    ContainerComponent,
    SubjectconfigComponent,
    SubjectsComponent
  ],
  templateUrl: './addsubjects.component.html',
  styleUrl: './addsubjects.component.css'
})
export class AddsubjectsComponent {
  protected config: boolean = false;
  protected subjectDomain: ISubjectDomain = defaultSubjectDomain;
  protected currenLevelDomain?: LevelDomain;
  protected title: string = '';
  private action: string = ''
  private actionSubject?: IActionSubject

  constructor(
    private route: ActivatedRoute,
    private levelService: LevelService
  ) {
    this.initializeSubjectDomain();
  }

  private initializeSubjectDomain(): void {
    const { levelId, courseId, modeId, subjectId } = this.route.snapshot.params;
    const action = this.route.snapshot.url[1].path
    const level = this.loadLevel(levelId);

    this.action = action

    if (level) {
      this.currenLevelDomain = level;
      const course = courseId ? this.loadCourse(level, courseId) : undefined;
      const mode = modeId && course ? this.loadMode(course, modeId) : undefined;
      this.updateTitle(course, mode);
      this.actionSubject =  mode || course
      if (this.action === 'add') {
        this.subjectDomain = this.createSubjectDomain(mode || course) ||defaultSubjectDomain;
      }
      else if(this.action === 'edit'){
        this.subjectDomain = this.actionSubject?.getSubjectById(subjectId) ||defaultSubjectDomain
      }
    }
  }

  private updateTitle(course?: CourseDomain, mode?: ModeDomain): void {
    if (course && mode) {
      this.title = `${course.name} - (${mode.name})`;
    } else if (course) {
      this.title = course.name;
    } else {
      this.title = '';
    }
  }

  private loadLevel(id: string): LevelDomain | undefined {
    return this.levelService.get(id);
  }

  private loadCourse(level: LevelDomain, id: string): CourseDomain | undefined {
    return level.courses.find(course => course.id === id);
  }

  private loadMode(course: CourseDomain, id: string): ModeDomain | undefined {
    return course.modalities.find(mode => mode.id === id);
  }

  private createSubjectDomain(actionSubject?: IActionSubject): ISubjectDomain | undefined {
    if (actionSubject) {
      const subjectDomain = SubjectDomain.create(this.title);
      actionSubject.addSubject(subjectDomain);
      return subjectDomain;
    }
    return undefined;
  }

  changeView(): void {
    this.config = !this.config;
  }
  ngOnDestroy() {
    if (this.action === 'add' && this.subjectDomain && this.actionSubject) {
      const isEmpty = this.subjectDomain.subjects.length===0;
      if (isEmpty) {
        this.actionSubject.removeSubject(this.subjectDomain as SubjectDomain);
      }
    }
  }
}
