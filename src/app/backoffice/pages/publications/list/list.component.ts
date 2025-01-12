import { Component } from '@angular/core';
import { PublicationService } from '../publication.service';
import { Level, Publication } from '../publication';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    DatePipe
  ],

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  protected readonly publications: Publication[]
  protected readonly dataSource: MatTableDataSource<Publication>
protected displayedColumns: string[] = ['name', 'start', 'end', 'actions'];

  constructor(
    private service: PublicationService
  ) {
    this.publications = this.service.getAll()
    this.dataSource = new MatTableDataSource(this.publications)
  }
  protected remove(publication:Publication){
    this.service.remove(publication)
    this.dataSource.data = this.publications
  }
  protected getSecondary(levels:Level[]){
    return  levels.map(l=>{
      const courses = l.courses.filter(c=>c.selected).map(c=>c.name).join(',')
      if(courses){
        return {name:l.name, courses:courses}
      }
      return undefined
    })
  }
}
