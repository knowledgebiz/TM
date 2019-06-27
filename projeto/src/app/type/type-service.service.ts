import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Types } from '../../../models/Types';


@Injectable()
export class TypeService {
  private url = 'http://localhost:3000/api/type';
  constructor(private http: HttpClient) {
  }

  public getType(): Observable<Types[]> {
    return this.http.get<Types[]>(this.url);
  }
}
