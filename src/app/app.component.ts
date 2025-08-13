import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { delay, filter, map, tap } from 'rxjs/operators';

import { ColorModeService, FormModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { CompileMode, EndPointController } from '../core/tools/controller.endPoint';
import { CommonModule } from '@angular/common';
import { LogViewerService } from '../core/ui/components/log-viewer/log-viewer.service';
import { LogViewer } from '../core/ui/components/log-viewer/log-viewer';


@Component({
  selector: 'app-root',
  template: '<log-viewer /><router-outlet />',
  providers: [],
  imports: [RouterOutlet,
    FormsModule,
    CommonModule,
    RouterModule,
    LogViewer
  ]
})
export class AppComponent implements OnInit {

  // constructor(public logViewerService: LogViewerService) {
  //   super();
  // }

  title = 'Nard';

  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #titleService = inject(Title);

  readonly #colorModeService = inject(ColorModeService);
  readonly #iconSetService = inject(IconSetService);

  constructor(public logViewerService: LogViewerService = inject(LogViewerService)) {
    this.#titleService.setTitle(this.title);
    EndPointController.InitUrl(CompileMode.Local);
    // iconSet singleton
    this.#iconSetService.icons = { ...iconSubset };
    this.#colorModeService.localStorageItemName.set('coreui-free-angular-admin-template-theme-default');
    this.#colorModeService.eventName.set('ColorSchemeChange');
  }

  ngOnInit(): void {

    this.#router.events.pipe(
      takeUntilDestroyed(this.#destroyRef)
    ).subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });

    this.#activatedRoute.queryParams
      .pipe(
        delay(1),
        map(params => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
        filter(theme => ['dark', 'light', 'auto'].includes(theme)),
        tap(theme => {
          this.#colorModeService.colorMode.set(theme);
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }
}
