

export type MenuItemAction = (arg?: string) => void;

export class DropdownMenuItem {

  constructor(label: string, action: MenuItemAction, url: string = '', icon: string = '') {
    this.label = label;
    this.action = action;
    this.icon = icon;
    this.url = url;
  }

  label: string;
  icon: string = '';
  url: string = '';
  action: MenuItemAction;
}