import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { catchError } from '../../node_modules/rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class BaseService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:1974';
  get(url: string, errorOperation: string): Observable<any> {
    return this.http.get(this.baseUrl + url).pipe(
      catchError(this.handleError<any>(errorOperation))
    );
  }

  post(url: string, body: any, errorOperation: string): Observable<any> {
    return this.http.post(this.baseUrl + url, body, httpOptions).pipe(
      catchError(this.handleError<any>(errorOperation))
    );
  }

  delete(url: string, errorOperation: string): Observable<any> {
    return this.http.delete(this.baseUrl + url, httpOptions).pipe(
      catchError(this.handleError<any>(errorOperation))
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
