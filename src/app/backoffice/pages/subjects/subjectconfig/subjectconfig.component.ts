import { ChangeDetectionStrategy,
  Component,  model, output, signal
} from '@angular/core';
import {Location} from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { PreviesubjectComponent } from '../../../../components/previesubject/previesubject.component';
import { DefaultSubject, DescriptorDomain, ISubjectDomain} from '../../../domain/levels'

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
  public ISubjectDomain = model.required<ISubjectDomain>()
  protected type = signal("all")
  protected showAddModalities=signal<boolean>(false)

  protected form = new FormGroup({
    name: new FormControl('Common', Validators.required),
    type: new FormControl("all", Validators.required),
    multiple: new FormControl(false),
    limit: new FormControl(0),
    defaultSubject:new FormControl<DescriptorDomain | null | undefined>(null)
  })
  public onChangeView=output()

  protected items = signal<DescriptorDomain[]>([])
  protected defaults:(DescriptorDomain|null)[]=[]


  constructor(
    private location :Location
   ) {



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
      const data = values as DefaultSubject
      this.ISubjectDomain().update(data)
      if(data.name === 'electives'){
        this.showAddModalities.set(true)
      }
      else{
        this.showAddModalities.set(false)
      }
    })
  }
  ngOnInit(){
    this.items.set(
       this.ISubjectDomain().subjects as DescriptorDomain[]
    )
    this.defaults = [null,...this.items()]
    const {name,type,multiple,limit,defaultSubject} = this.ISubjectDomain() as ISubjectDomain
    this.form.patchValue({
      name,type,multiple,limit,defaultSubject
    })
  }

  protected shouldShowLimit(): boolean {
    return this.form.get('multiple')?.value === true || this.type() === 'orderlist';
  }
  protected shouldShowDefault(): boolean {
    return this.form.get('multiple')?.value === false && this.type() === 'selectlist';
  }


  protected submit() {
    const data = this.form.value as DefaultSubject
    this.ISubjectDomain()?.update(data)
    this.location.back()
  }
}
