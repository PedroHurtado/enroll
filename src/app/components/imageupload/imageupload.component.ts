import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-imageupload',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageuploadComponent,
      multi: true
    }
  ]
})
export class ImageuploadComponent implements ControlValueAccessor {
  imageFile: File | null = null;
  preview:any = null;
  isDragging = false;
  disabled = false;

  // ControlValueAccessor methods
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: File): void {
    this.imageFile = value || null
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onFileSelected(event: Event): void {
    event.preventDefault();
    event.stopPropagation
    if (this.disabled) return;
    const input = (event.target as HTMLInputElement)
    if (input.files && input.files.length > 0) {
      this.processFile(input.files[0]);
    }
  }

  private processFile(file: File): void {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageFile =file
        this.preview = e.target.result
        this.onChange(this.imageFile);
        this.onTouch();
      };
      reader.readAsDataURL(file);
    }
  }

  deleteImage(): void {
    if (this.disabled) return;
    this.imageFile =null
    this.onChange(this.imageFile);
    this.onTouch();
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
    if (this.disabled) return;
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.processFile(file);
    }
  }
}
