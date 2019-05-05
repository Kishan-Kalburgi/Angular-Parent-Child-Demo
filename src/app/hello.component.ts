import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
            <button (click)="onClick()">Get Data from Child</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Output() fromChild = new EventEmitter();

  onClick() {
    this.fromChild.emit('Hey Hi Angular, How are you?');
  }
}
