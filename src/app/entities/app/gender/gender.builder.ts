

import { Injectable } from "@angular/core";
import { ServiceBuilder } from "../../../../core/service/service.builder";
import { IServiceBuilder } from "../../../../core/service/service.builder.interface";
import { Gender } from "./gender";


@Injectable({ providedIn: 'root' })
export class GenderBuilder extends ServiceBuilder<Gender> implements IServiceBuilder<Gender> {

  constructor() {
        super();
    }

  
  BuildInstance(): Gender;
  BuildInstance(id: number): Gender;
  BuildInstance(id: number, descriptor: string): Gender;
  BuildInstance(id: number = 0, descriptor: string = ''): Gender {
    return new Gender(id, descriptor);
  }

  BuildSeekInstance(): Gender {
    return GenderBuilder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Gender {
    let gender = new Gender();
    
    return gender;
  }
}