
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { IndexButton } from '../../../../components/index/index-buttons/index-button';
import { SeekBar } from '../../../../components/index/seekBar/seek-bar';
import { RowButtons } from '../../../../components/index/row-buttons/row-buttons';

import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { MenuDeleteUI } from '../delete/menu.delete';
import { MenuEditUI } from '../edit/menu.edit';

@Component({
  selector: 'app-menu-index',
  templateUrl: './menu.index.html',
  styleUrls: ['./menu.index.scss'],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    MenuEditUI,
    MenuDeleteUI,
    SeekBar,
    RowButtons,
  ]
})
export class MenuIndex extends IndexUI<Menu> implements IIndexUI<Menu> {

  constructor() {
    super(inject(MenuService));
  }

}