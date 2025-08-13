import { Injectable } from "@angular/core";
import { BaseEntity } from "../../../BaseEntity";

@Injectable({ providedIn: 'root' })
export class LogViewerService {

  constructor() {
    // Initialization logic
  }

  CurrentInstance: BaseEntity = new BaseEntity();

  modalVisible: boolean = false;

  Open(currentInstance: BaseEntity) {
    this.CurrentInstance = currentInstance;
    this.modalVisible = true;
    console.log(`Info : ${currentInstance.info.schema}.${currentInstance.info.name}`);
  }

  Close() {
    this.modalVisible = false;
  }

  LoadLogs() {
    let url = `/api/logs/${this.CurrentInstance.id}`;
  }

}