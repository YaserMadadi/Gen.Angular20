import { ActivatedRoute, Router } from "@angular/router";
import { BaseEntity } from "../../BaseEntity";
import { Service } from "../../service/service";
import { IMasterUI } from "./masterUI.interface";
import { lastValueFrom, Observable } from "rxjs";
import { inject, Injectable, OnInit } from "@angular/core";
import { MasterTrackerService } from "../../service/uiService/master-tracker-service";

@Injectable()
export abstract class MasterUI<T extends BaseEntity> implements IMasterUI<T>, OnInit {

    route: ActivatedRoute = inject(ActivatedRoute);
    router: Router = inject(Router);

    id: number = 0;
    currentInstance!: T;

    constructor(protected service: Service<T>, protected masterTrackerService: MasterTrackerService) {

    }

    ngOnInit(): void {
        this.readRouteParameter();
    }

    async onLoad(): Promise<void> {
        console.log("Id : ", this.id);
        let result = await this.service.RetrieveById(this.id);
        this.currentInstance = await lastValueFrom(result);
    }

    async readRouteParameter(): Promise<void> {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.masterTrackerService.setMasterId(this.id);
        this.onLoad();
    }
}