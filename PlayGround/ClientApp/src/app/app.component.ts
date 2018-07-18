import { Component } from '@angular/core';
import { MESSAGES } from './mock-msg';
import { findLast } from '../../node_modules/@angular/compiler/src/directive_resolver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messages = MESSAGES;
  inputMsg = '';

  addMessage(): void {
    this.messages.push({ msg: this.inputMsg });
    this.inputMsg = '';
  }
}
