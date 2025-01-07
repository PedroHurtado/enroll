import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { PreviesubjectComponent } from '../../../../components/previesubject/previesubject.component';
import { Config, defaultConfig } from '../../../../components/previesubject/config';
import { ItemsService } from '../../../../components/previesubject/items.service';
/*import { PreviesubjectComponent } from '../previesubject/previesubject.component';
import { Config, defaultConfig } from '../previesubject/config';
import { ItemsService } from '../previesubject/items.service';*/

@Component({
  selector: 'app-subjectconfig',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    PreviesubjectComponent
  ],
  templateUrl: './subjectconfig.component.html',
  styleUrl: './subjectconfig.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectconfigComponent {
  protected type = signal("all")
  protected config = signal<Config>(defaultConfig)
  protected form = new FormGroup({
    type: new FormControl("all"),
    title: new FormControl('', Validators.required),
    multiple: new FormControl(false),
    limit: new FormControl(0),
    defaultSubject:new FormControl(null)
  })
  public onChangeView=output()
  protected items:any[]=[]
  constructor(private service:ItemsService) {
    this.items = [null,...this.service.items];
    this.form.get('type')?.valueChanges.subscribe((newValue) => {
      if (newValue) {
        this.type.set(newValue)
        if (this.type() === 'all' || this.type() === 'orderlist') {
          this.form.patchValue({
            multiple: false,
            limit: 0,
            defaultSubject:null
          })
        }
        else if (this.type() === "selectlist") {
          this.form.patchValue({
            multiple: true,
            limit: 0
          })
        }
      }
    });
    this.form.valueChanges.subscribe(values => {
      const { type, title, multiple, limit, defaultSubject } = values as Config
      this.config.set({
        type, title, multiple, limit, defaultSubject
      })
    })
  }

  protected shouldShowLimit(): boolean {
    return this.form.get('multiple')?.value === true || this.type() === 'orderlist';
  }
  protected shouldShowDefault(): boolean {
    return this.form.get('multiple')?.value === false && this.type() === 'selectlist';
  }
  submit() {
    console.log(this.form.value)
  }
}
