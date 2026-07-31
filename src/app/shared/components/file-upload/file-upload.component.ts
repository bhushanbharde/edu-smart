import { Component, Output, EventEmitter, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'erp-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() label = '';

  @Input() accept = '*';

  @Output() fileSelected = new EventEmitter<File>();

  select(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      this.fileSelected.emit(file);
    }
  }
}
