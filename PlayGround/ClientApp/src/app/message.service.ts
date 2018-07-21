import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private messageUrl = 'http://localhost:1974/api/Messages';

  constructor(private http: HttpClient) { }
  getMsgs(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messageUrl);
  }

  addMsg(msg: Message): Observable<Message> {
    return this.http.post<Message>(this.messageUrl, msg, httpOptions);
  }

}
