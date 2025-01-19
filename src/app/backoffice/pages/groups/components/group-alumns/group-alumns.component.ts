import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumn, GroupsService } from '../../groups.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Descriptor } from '../../../../domain/levels';

@Component({
  selector: 'app-group-alumns',
  imports: [
    MatTableModule,
  ],
  templateUrl: './group-alumns.component.html',
  styleUrl: './group-alumns.component.css'
})
export class GroupAlumnsComponent {
  protected alumn =signal<Alumn|undefined>(undefined)
  protected readonly dataSource: MatTableDataSource<Descriptor>
  protected displayedColumns: string[] = ['name'];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: GroupsService

  ) {
    const [_, type, subtype] = route.snapshot.url.map(s => s.path);
    const { courseId, modalityId, subjectId, position } = route.snapshot.params;

    switch (type) {
      case 'modality':
        this.alumn.set(this.handleModalityEnrolls(subtype, courseId, modalityId, subjectId));
        break;
      case 'electives':
        this.alumn.set(this.service.getElectivesEnrolls(courseId, subjectId, position));
        break;
      default:
        break;
    }
    if(this.alumn()){
      this.dataSource = new MatTableDataSource(this.alumn()?.enrolls)
    }else{
      this.dataSource = new MatTableDataSource()
    }
  }
  private handleModalityEnrolls(subtype: string, courseId: string, modalityId: string, subjectId: string): Alumn | undefined {
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
