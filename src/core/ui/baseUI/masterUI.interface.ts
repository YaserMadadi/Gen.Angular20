import { ActivatedRoute, Router } from "@angular/router";
import { BaseEntity } from "../../BaseEntity";
import { Observable } from "rxjs";

export interface IMasterUI<T extends BaseEntity> {

    route: ActivatedRoute;
    router: Router;

    currentInstance: T;
    id: number;

    readRouteParameter(): void;

    onLoad(): void;
}