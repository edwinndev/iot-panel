import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@data/interfaces/api.response';
import { User } from '@data/interfaces/api.user';
import { environment } from 'environments/environment.prod';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl : string = environment.apiUrl
  private _users : User[] = [];

  constructor(private http : HttpClient) { }
  
  public get users() : User[] {
    console.log(this._users);
    return this._users;
  }

  public getUsers() : Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(`${this.apiUrl}/users`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
    .pipe(tap(auth => this._users = auth.data));
  }

}
