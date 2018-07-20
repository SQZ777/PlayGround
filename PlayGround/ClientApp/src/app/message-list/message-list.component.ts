import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {

    // this.http.get<Message[]>('http://localhost:1974/api/values').subscribe(messages => this.messages = messages );
    this.messageService.getMsgs()
      .subscribe(messages => this.messages = messages);
  }
}
