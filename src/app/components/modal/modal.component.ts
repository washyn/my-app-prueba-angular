import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input()
  title: string = '';

  @Output()
  close: EventEmitter<boolean> = new EventEmitter<boolean>();

  isOpened: boolean = false;

  closeModal() {
    this.isOpened = false;
    this.close.emit(this.isOpened);
  }
}
