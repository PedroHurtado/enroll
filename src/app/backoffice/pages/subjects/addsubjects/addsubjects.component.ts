import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { ContainerComponent } from '../../../../components/container/container.component';
import { SubjectconfigComponent } from '../subjectconfig/subjectconfig.component';
import { SubjectsComponent } from '../subjects/subjects.component';

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
  protected config:boolean = false
  changeView(){
    this.config=!this.config
  }
}
