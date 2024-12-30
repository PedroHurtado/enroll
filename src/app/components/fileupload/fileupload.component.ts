import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileuploadComponent,
      multi: true
    }
  ]
})
export class FileuploadComponent implements ControlValueAccessor {
  files: File[] = [];
  isDragging = false;
  disabled = false;
  onChange: (value: File[]) => void = () => {};
  onTouched: () => void = () => {};

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.addFiles(Array.from(input.files));
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files?.length) {
      this.addFiles(Array.from(files));
    }
  }

  private addFiles(filesToAdd: File[]): void {
    this.files = [...this.files, ...filesToAdd];
    this.onChange(this.files);
    this.onTouched();
  }

  removeFile(index: number): void {
    this.files = this.files.filter((_, i) => i !== index);
    this.onChange(this.files);
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(files: File[]): void {
    this.files = files || [];
  }

  registerOnChange(fn: (value: File[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
