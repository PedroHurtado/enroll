import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { StepalumnoComponent } from './components/stepalumno/stepalumno.component';
import { StepmotherComponent } from './components/stepmother/stepmother.component';
import { StepfatherComponent } from './components/stepfather/stepfather.component';
import { StepsituationComponent } from './components/stepsituation/stepsituation.component';

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
    StepsituationComponent
  ],
  templateUrl: './steppers.component.html',
  styleUrl: './steppers.component.css'
})
export class SteppersComponent {
  currentStep = 0;
  totalSteps = 7;

  nextStep() {
    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
