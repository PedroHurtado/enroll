import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../groups.service';
import { Descriptor } from '../../../../domain/levels';

@Component({
  selector: 'app-group-alumns',
  imports: [],
  templateUrl: './group-alumns.component.html',
  styleUrl: './group-alumns.component.css'
})
export class GroupAlumnsComponent {
  protected enrolls =signal<Descriptor[]|undefined>([])
  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: GroupsService

  ) {
    const [_, type, subtype] = route.snapshot.url.map(s => s.path);
    const { courseId, modalityId, subjectId, position } = route.snapshot.params;

    switch (type) {
      case 'modality':
        this.enrolls.set(this.handleModalityEnrolls(subtype, courseId, modalityId, subjectId));
        break;
      case 'electives':
        this.enrolls.set(this.service.getElectivesEnrolls(courseId, subjectId, position));
        break;
      default:
        break;
    }
  }
  private handleModalityEnrolls(subtype: string, courseId: string, modalityId: string, subjectId: string): Descriptor[] | undefined {
    switch (subtype) {
      case 'compulsory':
        return this.service.getModaliyCompulsoryEnrolls(courseId, modalityId, subjectId);
      case 'electives':
        return this.service.getModaliyElectivesEnrolls(courseId, modalityId, subjectId);
      default:
        return this.service.getModaliyEnrolls(courseId, modalityId);
    }
  }

}
