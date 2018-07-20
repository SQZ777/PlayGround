import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageUrl: 'api/messages';
  constructor(private http: HttpClient,
    private messageService: MessageService
  ) { }

  get(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messageUrl);
  }
}
