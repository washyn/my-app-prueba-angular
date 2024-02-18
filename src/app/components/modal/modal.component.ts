import {Component, EventEmitter, Input, Output} from '@angular/core';


// <app-modal title="Este es un modal" *ngIf="isOpened" (close)="isOpened=false">
//   <p>
//     Este es un ejemplo un texto en <b>negrita</b>
// </p>
// </app-modal>


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input()
  title: string = ''

  @Output()
  close : EventEmitter<boolean> = new EventEmitter<boolean>();

  isOpened: boolean = false

  closeModal(){
    this.isOpened = false
    this.close.emit(this.isOpened)
  }
}
