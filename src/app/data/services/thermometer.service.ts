import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@data/interfaces/api.response';
import { Thermometer } from '@data/interfaces/api.thermometer';
import { environment } from 'environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThermometerService {
  private apiUrl : string = environment.apiUrl

  constructor(private http : HttpClient) { }

  public getThermometerData(name : string) : Observable<ApiResponse<Thermometer>> {
    return this.http.get<ApiResponse<Thermometer>>(`${this.apiUrl}/ths/${name}`)
  }
}
