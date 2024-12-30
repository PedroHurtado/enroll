import { Component } from '@angular/core';
import { FileuploadComponent } from '../../../../../components/fileupload/fileupload.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-healstep',
  imports: [FileuploadComponent, MatCheckboxModule],
  templateUrl: './healstep.component.html',
  styleUrl: './healstep.component.css'
})
export class HealstepComponent {

}
