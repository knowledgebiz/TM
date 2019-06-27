import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExpLevels } from '../../../models/ExpLevels';


@Injectable()
export class expService {
  private url = 'http://localhost:3000/api/expa';
  constructor(private http: HttpClient) {
  }

  public getExp(): Observable<ExpLevels[]> {
    return this.http.get<ExpLevels[]>(this.url);
  }
}
