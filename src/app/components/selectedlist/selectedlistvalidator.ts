import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function selectedlistValidator(length:number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null  => {
    const selectedItems = control.value;
    return selectedItems?.length === length ? null : { selectedlist: true}
  };
}
