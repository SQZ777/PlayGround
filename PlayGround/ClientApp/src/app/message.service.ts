import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageUrl = 'http://localhost:1974/api/Messages';

  constructor(private http: HttpClient) { }

  getMsgs(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messageUrl);
  }

}
