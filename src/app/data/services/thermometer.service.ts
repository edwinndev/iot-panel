import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@data/interfaces/api.response';
import { Thermometer } from '@data/interfaces/api.thermometer';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ThermometerService {
  private apiUrl : string = environment.apiUrl

  constructor(private http : HttpClient) { }

  public getThermometerData(name : string) {
    return this.http.get<ApiResponse<Thermometer>>(`${this.apiUrl}/ths/${name}`)
  }
}
