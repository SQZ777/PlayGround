import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/objects/user';
import { Observable, of } from '../../node_modules/rxjs';
import { catchError } from '../../node_modules/rxjs/operators';
import { errorHandler } from '../../node_modules/@angular/platform-browser/src/browser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userUrl = '';

  constructor(private http: HttpClient) { }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions).pipe(
      catchError(this.handleError<User>('postUser'))
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
