import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

// tslint:disable-next-line: class-name
export interface workersDetails {
  id: number;
  name: string;
  email: string;
  password: '';
  active: boolean;
  entities_id: number;
  teams_id: number;
  experience_levels_id: number;
  department_id: number;
  position_id: number;
  type_id: number;
  exp: number;
}
// tslint:disable-next-line: class-name
interface tokenResponse {
  token: string;
}

// tslint:disable-next-line: class-name
export interface tokenPayLoad {
  id: number;
  name: string;
  email: string;
  password: string;
  active: boolean;
  department_id: number;
  experience_levels_id: number;
}

@Injectable()
export class AuthenticationService {
  private token: string;
  constructor(private http: HttpClient, private router: Router) { }
  private saveToken(token: string): void {
    localStorage.setItem('userToken', token);
    this.token = token;
  }
  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('userToken');
    }
    return this.token;
  }
  public getUserDetails(): workersDetails {
    const token = this.getToken();
    let payLoad;
    if (token) {
      payLoad = token.split('.')[1];
      payLoad = window.atob(payLoad);
      return JSON.parse(payLoad);
    } else {
      return null;
    }
  }
  public isLoggedIn() {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public register(user: tokenPayLoad): Observable<any> {
    const base = this.http.post('http://localhost:3000/api/workersr', user);
    const request = base.pipe(
      map((data: tokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }
  public login(user: tokenPayLoad): Observable<any> {
    const base = this.http.post('http://localhost:3000/api/workersl', user);
    const request = base.pipe(
      map((data: tokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }
  public edit(user: workersDetails): Observable<any> {
    const base = this.http.patch('http://localhost:3000/api/workersu/', user);
    const request = base.pipe(
      map((data: tokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    window.location.href = '/profile';
    return request;
  }

  public profile(): Observable<any> {
    return this.http.get('http://localhost:3000/api/workersp', {
      headers: { authorization: `${this.getToken()}` }
    });
  }
  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('userToken');
    this.router.navigateByUrl('/');
  }
}
