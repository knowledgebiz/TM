import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Workers } from '../../../models/Workers';
import { Entities } from './entities.class';



@Injectable()
export class AdminService {
  private url = 'http://localhost:3000/api/workersg';
  private url2 = 'http://localhost:3000/api/entitya';
  constructor(private http: HttpClient) {
  }

  public getWorkers(): Observable<Workers[]> {
    return this.http.get<Workers[]>(this.url);
  }
  public getEntities(): Observable<Entities[]> {
    return this.http.get<Entities[]>(this.url2);
  }
}
