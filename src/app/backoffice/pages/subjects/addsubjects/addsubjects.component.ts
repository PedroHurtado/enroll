import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { ContainerComponent } from '../../../../components/container/container.component';
import { SubjectconfigComponent } from '../subjectconfig/subjectconfig.component';
import { SubjectsComponent } from '../subjects/subjects.component';

import { ActivatedRoute } from '@angular/router';
import { IAddSubject, ISubjectDomain, LevelDomain, SubjectDomain, ModeDomain, CourseDomain } from '../../../domain/levels';
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
  protected subjectDomain?: ISubjectDomain;
  protected currenLevelDomain?: LevelDomain;
  protected title: string = '';

  constructor(
    private route: ActivatedRoute,
    private levelService: LevelService
  ) {
    this.initializeSubjectDomain();
  }

  private initializeSubjectDomain(): void {
    const { levelId, courseId, modeId } = this.route.snapshot.params;
    const level = this.loadLevel(levelId);

    if (level) {
      this.currenLevelDomain = level;
      const course = courseId ? this.loadCourse(level, courseId) : undefined;
      const mode = modeId && course ? this.loadMode(course, modeId) : undefined;
      this.updateTitle(course, mode);
      this.subjectDomain = this.createSubjectDomain(mode || course);
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

  private createSubjectDomain(addSubject?: IAddSubject): ISubjectDomain | undefined {
    if (addSubject) {
      const subjectDomain = SubjectDomain.create(this.title);
      addSubject.addSubject(subjectDomain);
      return subjectDomain;
    }
    return undefined;
  }

  changeView(): void {
    this.config = !this.config;
  }
}
