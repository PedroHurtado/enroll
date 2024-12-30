import { Component } from '@angular/core';
import { ImageuploadComponent } from '../../../../../components/imageupload/imageupload.component';
import { FileuploadComponent } from '../../../../../components/fileupload/fileupload.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-stepalumno',
  imports: [
    ImageuploadComponent,
    FileuploadComponent,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './stepalumno.component.html',
  styleUrl: './stepalumno.component.css'
})
export class StepalumnoComponent {

}
