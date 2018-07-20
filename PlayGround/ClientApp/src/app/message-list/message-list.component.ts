import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  messages: Message[] = [];
  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.messageService.get().subscribe(message => this.messages = message);
  }
}
