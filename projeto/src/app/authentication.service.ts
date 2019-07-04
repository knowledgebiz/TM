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
export interface EntityDetails {
  id: number;
  name: string;
  logo: string;
  email: string;
  password: '';
  active: boolean;
  description: string;
  website_url: number;
  entities_types_id: number;
  exp: number;
}
// tslint:disable-next-line: class-name
interface tokenResponse {
  token: string;
}
// tslint:disable-next-line: class-name
interface tokenEntResponse {
  token: string;
}

// tslint:disable-next-line: class-name
export interface tokenPayLoad {
  id: number;
  name: string;
  email: string;
  active: boolean;
  department_id: number;
  experience_levels_id: number;
}
// tslint:disable-next-line: class-name
export interface tokenPayLoadEntity {
  id: number;
  name: string;
  email: string;
  active: boolean;
  description: string;
  website_url: string;
  entities_types_id: number;
}

@Injectable()
export class AuthenticationService {
  private token: string;
  private entToken: string;
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
    window.location.href = '/';
  }






  private saveEntToken(entToken: string): void {
    localStorage.setItem('entityToken', entToken);
    this.entToken = entToken;
  }

  private getEntToken(): string {
    if (!this.entToken) {
      this.entToken = localStorage.getItem('entityToken');
    }
    return this.entToken;
  }
  public getEntDetails(): EntityDetails {
    const token = this.getEntToken();
    let payLoad;
    if (token) {
      payLoad = token.split('.')[1];
      payLoad = window.atob(payLoad);
      return JSON.parse(payLoad);
    } else {
      return null;
    }
  }
  public isEntLoggedIn() {
    const ent = this.getEntDetails();
    if (ent) {
      return ent.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public registerEnt(ent: tokenPayLoadEntity): Observable<any> {
    const base = this.http.post('http://localhost:3000/api/entityr', ent);
    const request = base.pipe(
      map((data: tokenEntResponse) => {
        if (data.token) {
          this.saveEntToken(data.token);
        }
        return data;
      })
    );
    return request;
  }
  public loginEnt(user: tokenPayLoadEntity): Observable<any> {
    const base = this.http.post('http://localhost:3000/api/entityl', user);
    const request = base.pipe(
      map((data: tokenEntResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  public editEnt(ent: EntityDetails): Observable<any> {
    const base = this.http.patch('http://localhost:3000/api/entityu/', ent);
    const request = base.pipe(
      map((data: tokenEntResponse) => {
        if (data.token) {
          this.saveEntToken(data.token);
        }
        return data;
      })
    );
    window.location.href = '/profileEnt';
    return request;
  }

  public profileEnt(): Observable<any> {
    return this.http.get('http://localhost:3000/api/entityp', {
      headers: { authorization: `${this.getEntToken()}` }
    });
  }
  public logoutEnt(): void {
    this.entToken = '';
    window.localStorage.removeItem('entityToken');
    this.router.navigateByUrl('/');
  }
}
