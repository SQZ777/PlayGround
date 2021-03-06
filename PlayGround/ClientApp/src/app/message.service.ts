import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private messageUrl = '/api/Messages';

  constructor(private http: HttpClient, private baseService: BaseService) { }
  getMsgs(): Observable<Message[]> {
    return this.baseService.get(this.messageUrl, 'getMessage');
  }

  addMsg(msg: Message): Observable<Message> {
    return this.baseService.post(this.messageUrl, msg, 'addMessage');
  }

  delMsg(msg: Message): Observable<Message> {
    const delUrl = `${this.messageUrl}/${msg.id}`;
    return this.baseService.delete(delUrl, 'deleteMessage');
  }
}
