import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/objects/user';
import { Observable, of } from '../../node_modules/rxjs';
import { BaseService } from './base.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userUrl = '';

  constructor(private http: HttpClient,
    private baseService: BaseService) { }

  login(user: User): Observable<User> {
    return this.baseService.postRequest(this.userUrl, user, 'login');
  }
}
