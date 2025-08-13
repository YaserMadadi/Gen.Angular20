import { Component, inject, Input } from '@angular/core';
import { BaseEntity } from '../../../BaseEntity';
import { LogViewerService } from './log-viewer.service';
import { CommonModule } from '@angular/common';
import { AppModalComponent } from '../../modal/modal.component';


@Component({
  selector: 'log-viewer',
  templateUrl: './log-viewer.html',
  styleUrls: ['./log-viewer.scss'],
  standalone: true,
  imports: [CommonModule, AppModalComponent]
})
export class LogViewer {

  constructor(public service: LogViewerService = inject(LogViewerService)) {
  }

  closed(value: boolean) {
    console.log("losing!");
  }

  setHeader() {
    if (!this.service.CurrentInstance)
      return `Please select a Record to show the life history`;
    return `Log Viewer - Record ${this.service.CurrentInstance.info.schema}.${this.service.CurrentInstance.info.name} ( id : ${this.service.CurrentInstance.id} )`;
  }
}