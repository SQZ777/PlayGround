import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/objects/user';
import { Observable, of } from '../../node_modules/rxjs';
import { map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userUrl = '/api/login';

  constructor(private http: HttpClient,
    private baseService: BaseService) { }

  login(user: User): Observable<User> {
    return this.baseService.post(this.userUrl, user, 'login');
  }

}
