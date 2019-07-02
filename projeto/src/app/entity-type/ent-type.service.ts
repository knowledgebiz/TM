import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntityTypes } from '../../../models/Entities_Types';


@Injectable()
export class entTypeService {
  private url = 'http://localhost:3000/api/entitiesa';
  constructor(private http: HttpClient) {
  }

  public getEntType(): Observable<EntityTypes[]> {
    return this.http.get<EntityTypes[]>(this.url);
  }
}
