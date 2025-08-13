import { Component, Input } from '@angular/core';
import { DropdownMenuItem, MenuItemAction } from './dropdown-menu-item.model';
import { CommonModule } from '@angular/common';
import { freeSet } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { IconModule } from '@coreui/icons-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.html',
  styleUrls: ['./dropdown-menu.scss'],
  imports: [
    CommonModule,
    IconModule
  ],
})
export class DropdownMenuComponent {

  constructor() {

  }

  @Input() items: DropdownMenuItem[] = [];

  @Input() disabled: boolean = true;

  @Input() icon: any;

  //@Input() url: string;

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onMenuItemClick<T>(item: DropdownMenuItem, arg?: string) {
    item.action?.(arg);
    // if (item.hasAction()) {
    //   item.action?.(arg);
    // } else if (item.hasUrl()) {
    //   window.location.href = item.url!;
    // }
  }


  runAction(item: DropdownMenuItem) {



    // if (item.url.length > 0)
    //   this.router.navigate([item.url]);
    // else 
    //if (item.action)
    //item.action();
    this.isOpen = false;
  }

  closeDropdown() {
    setTimeout(() => {
      this.isOpen = false;
    }, 200); // delay in milliseconds
  }
}