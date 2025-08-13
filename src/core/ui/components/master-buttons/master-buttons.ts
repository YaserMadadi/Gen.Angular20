import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'master-buttons',
  templateUrl: './master-buttons.html',
  styleUrls: ['./master-buttons.scss'],
  imports: [
    CommonModule
  ]
})
export class MasterButtons {

  @Input() title: string = 'بازیابـــی مجــدد';
  @Input() refreshClass: string = 'btn btn-outline-default';
  @Output() onRefreshClick = new EventEmitter<void>();

  onButtonClick() {
    this.onRefreshClick.emit();
  }
}