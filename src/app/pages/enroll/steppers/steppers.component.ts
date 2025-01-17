import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { StepalumnoComponent } from './components/stepalumno/stepalumno.component';
import { StepmotherComponent } from './components/stepmother/stepmother.component';
import { StepfatherComponent } from './components/stepfather/stepfather.component';
import { StepsituationComponent } from './components/stepsituation/stepsituation.component';
import { StepothersComponent } from './components/stepothers/stepothers.component';
import { HealstepComponent } from './components/healstep/healstep.component';
import { SubjectsComponent } from './components/subjects/subjects.component';


@Component({
  selector: 'app-steppers',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    StepalumnoComponent,
    StepmotherComponent,
    StepfatherComponent,
    StepsituationComponent,
    StepothersComponent,
    HealstepComponent,

    SubjectsComponent,
  ],
  templateUrl: './steppers.component.html',
  styleUrl: './steppers.component.css'
})
export class SteppersComponent {

}
