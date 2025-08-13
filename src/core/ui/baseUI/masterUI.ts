import { ActivatedRoute, Router } from "@angular/router";
import { BaseEntity } from "../../BaseEntity";
import { Service } from "../../service/service";
import { IMasterUI } from "./masterUI.interface";
import { lastValueFrom, Observable } from "rxjs";
import { AfterViewChecked, AfterViewInit, inject, Injectable, OnInit } from "@angular/core";
import { MasterTrackerService } from "../../service/uiService/master-tracker-service";

@Injectable()
export abstract class MasterUI<T extends BaseEntity> implements IMasterUI<T>, AfterViewInit {

    route: ActivatedRoute = inject(ActivatedRoute);
    router: Router = inject(Router);

    id: number = 0;

    ngAfterViewInit(): void {

    }

    currentInstance!: T;

    constructor(protected service: Service<T>) {
        this.readRouteParameter();
    }


    async onLoad(): Promise<void> {
        console.log('onload ... ', this.id);
        let result = await this.service.RetrieveById(this.id);
        console.log('onload ... ', result);
        this.currentInstance = await lastValueFrom(result);
    }

    async readRouteParameter(): Promise<void> {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.onLoad();
    }
}