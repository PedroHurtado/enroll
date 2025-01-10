import { Component, computed, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { addFeature, DescriptorDomain, ISubjectDomain, SubjectDomain } from '../../backoffice/domain/levels';

@Component({
  selector: 'app-alllist',
  imports: [MatListModule],
  templateUrl: './alllist.component.html',
  styleUrl: './alllist.component.css'
})
export class AlllistComponent {
  subjectDomain = input.required<ISubjectDomain>()
  showText = input<boolean>(false)
  characteristics = computed(() => {
    return addFeature(this.subjectDomain())
  })

}

