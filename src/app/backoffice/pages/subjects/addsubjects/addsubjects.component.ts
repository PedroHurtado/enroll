import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { ContainerComponent } from '../../../../components/container/container.component';
import { SubjectconfigComponent } from '../subjectconfig/subjectconfig.component';
import { SubjectsComponent } from '../subjects/subjects.component';

import { ItemsService } from '../../../../components/previesubject/items.service';
import { ActivatedRoute } from '@angular/router';
import { CourseDomain, LevelDomain, ModeDomain, SubjectDomain } from '../../../domain/levels';
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
  protected config: boolean = false

  protected subjects: SubjectDomain[] = [];
  protected currenLevelDomain?: LevelDomain | undefined;
  protected currentCourseDomain?: CourseDomain | undefined;
  protected currentModeDomain?: ModeDomain | undefined;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService,
    private levelService: LevelService
  ) {
    this.loadLevel(this.route.snapshot.params["levelId"])
    this.loadCourse(this.route.snapshot.params["courseId"])

  }
  private loadLevel(id:string){
    this.currenLevelDomain = this.levelService.get(id)
  }
  private loadCourse(id:string){
    if(this.currenLevelDomain){
      this.currentCourseDomain = this.currenLevelDomain.courses.find(c=>c.id === id)
      if(this.currentCourseDomain){
        this.subjects = this.currentCourseDomain.subjects
      }
    }
  }
  changeView() {
    this.config = !this.config
  }
}
