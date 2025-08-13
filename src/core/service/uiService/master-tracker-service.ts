import { Injectable, signal } from "@angular/core";

@Injectable()
export class MasterTrackerService {

    masterId = signal<number>(0);

    setMasterId(id: number) {
        this.masterId.set(id);
    }
}