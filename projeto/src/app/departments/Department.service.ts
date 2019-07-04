import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Department } from '../../../models/Department';


@Injectable()
export class DepartmentService {
  private url = 'http://localhost:3000/api/departa';
  constructor(private http: HttpClient) {
  }

  public getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url);
  }
}
