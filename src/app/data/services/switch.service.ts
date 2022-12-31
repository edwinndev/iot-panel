import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  private apiUrl: string = environment.apiUrl

  constructor(private http : HttpClient) { }

  public update(device : string, value : boolean) {
    return this.http.put(`${this.apiUrl}/switchs`, {device, value});
  }
}
