import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ApiResponse } from '@data/interfaces/api.response';
import { environment } from 'environments/environment.prod';
import { LoginResponse } from '@data/interfaces/api.login';
import { User } from '@data/interfaces/api.user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl
  private _auth : LoginResponse | undefined;

  constructor(private http : HttpClient) { }

  public get auth() {
    return {...this._auth};
  }

  public login(username: string, password: string) : Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(`${this.apiUrl}/auth/login`, { username, password})
    .pipe(tap(auth => this._auth = auth.data));
  }

  public register(user : User) : Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(`${this.apiUrl}/auth/register`, user)
    .pipe(tap(auth => this._auth = auth.data));
  }

  public logout(): void {
    localStorage.removeItem('token');
    this._auth = undefined;
  }
}
